import React, { useMemo } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";

const verticalMargin = 50;

// accessors
const getLetter = (d) => d.letter;
const getLetterFrequency = (d) => Number(d.frequency);

const margins = {
  left: 30,
  right: 70,
};

export default function Chart({
  width,
  height,
  data,
  background,
  tickColor,
  showXTick,
  showYTick,
  numOfTicks = 5,
  barPadding = 0.8,
  events = false,
}) {
  // bounds
  const xMax = width - margins.left;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: barPadding,
      }),
    [barPadding, data, xMax]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.round(Math.max(...data.map(getLetterFrequency)))],
      }),
    [data, yMax]
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill={background} rx={14} />
      <Group top={verticalMargin / 2} left={margins.left} right={margins.right}>
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              rx={5}
              fill={d.fill || "#C3FF4D"}
              onClick={() => {
                if (events)
                  alert(`clicked: ${JSON.stringify(Object.values(d))}`);
              }}
            />
          );
        })}
        <AxisBottom
          numTicks={data.length}
          top={yMax}
          hideTicks
          scale={xScale}
          stroke=""
          tickLabelProps={() => ({
            fill: showXTick ? tickColor : "transparent",
            fontSize: 11,
            textAnchor: "middle",
          })}
        />
        <AxisLeft
          scale={yScale.nice()}
          hideTicks
          stroke=""
          numTicks={numOfTicks}
          top={0}
          tickLabelProps={(e) => ({
            fill: showYTick ? tickColor : "transparent",
            fontSize: 10,
            textAnchor: "end",
            x: -12,
            y: (yScale(e) ?? 0) + 3,
          })}
        />
      </Group>
    </svg>
  );
}
