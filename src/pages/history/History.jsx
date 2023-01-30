import React from "react";
import { HistoryWrapper } from "./style";
import {
  BarChart,
  BmiStatus,
  Headers,
  NavigationBar,
  ProgressMap,
} from "../../components";
import Icon from "@ant-design/icons";

import { Typography } from "antd";
import { Refresh } from "../../assets/icons";
import { Line } from "../../assets/charts";
import { LineData, WeekData2, WeekData3 } from "../../data/weekdata";
const { Title } = Typography;
export default function History() {
  return (
    <HistoryWrapper>
      <div className="main-container">
        <Headers
          heading={<Title level={4}>History</Title>}
          suffix={<Icon component={Refresh} />}
        />
        <Title level={4}>
          {new Date().toLocaleDateString("en-us", {
            weekday: "long",
            // year: "numeric",
            day: "numeric",
            month: "short",
          })}
        </Title>
        <div className="margin-container">
          <ProgressMap
            title="Weight"
            chart={<Line data={LineData || []} />}
            value={
              <Title level={3} className="text">
                52,3<span>kg</span>
              </Title>
            }
          />
        </div>
        <div className="margin-container">
          <BmiStatus title="BMI" value="17.3" />
        </div>
        <div className="margin-container swipe-box">
          <ProgressMap
            title="Blood Pressure"
            chart={
              <BarChart
                data={WeekData2}
                showXTick
                background="transparent"
                height={120}
                barPadding={0.8}
              />
            }
            value={
              <Title level={3} className="text">
                120/80
              </Title>
            }
          />
          <ProgressMap
            title="Sleep"
            chart={
              <BarChart
                data={WeekData3}
                showXTick
                background="transparent"
                height={120}
                barPadding={0.8}
              />
            }
            value={
              <Title level={3} className="text">
                6<span>hr</span> 20<span>m</span>
              </Title>
            }
          />
        </div>
      </div>
      <NavigationBar active="history" />
    </HistoryWrapper>
  );
}
