import { ParentSize } from "@visx/responsive";
import React from "react";
import { Bar as Chart } from "../../assets/charts";

export default function BarChart({
  data,
  height,
  tickColor,
  barPadding,
  background,
  numOfTicks,
  showXTick,
  showYTick,
}) {
  return (
    <ParentSize style={{ width: "100%", height: height }}>
      {({ width }) => (
        <Chart
          data={data}
          background={background}
          width={width}
          height={height}
          tickColor={tickColor}
          barPadding={barPadding}
          numOfTicks={numOfTicks}
          showXTick={showXTick}
          showYTick={showYTick}
        />
      )}
    </ParentSize>
  );
}
