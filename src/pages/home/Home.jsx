import React from "react";
import {
  Headers,
  ProgressInfo,
  BarChart,
  WorkOutList,
  NavigationBar,
} from "../../components";
import { Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Flames, WristWatch, Footsteps, WorkOutBike } from "../../assets/icons";
import { HomeWrapper } from "./style";
import { WeekData } from "../../data/weekdata";

const { Title, Text } = Typography;
export default function Home() {
  return (
    <HomeWrapper>
      <div className="main-container">
        <Headers
          heading={<Title level={4}>My Activity</Title>}
          suffix={
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          }
        />
        <div className="progressInfos">
          <ProgressInfo
            icon={WristWatch}
            text="27"
            description="left today"
            progress={90}
          />
          <ProgressInfo
            icon={Flames}
            isTime
            text="866"
            description="Calories burn"
            progress={50}
          />
          <ProgressInfo
            icon={Footsteps}
            text="7579"
            description="steps"
            progress={85}
          />
        </div>
        <Headers
          heading={<Title level={4}>Goal for week</Title>}
          suffix={<Text>42 of 44</Text>}
        />
        <div className="chart">
          <BarChart
            data={WeekData}
            tickColor="#fff"
            background="#7B66FF"
            height={200}
            barPadding={0.6}
            showXTick
            showYTick
          />
        </div>
        <Headers
          heading={<Title level={4}>Trending Workouts</Title>}
          suffix={<Text className="underline">see all</Text>}
        />
        <WorkOutList icon={WorkOutBike} text="Body Builder" />
      </div>

      <NavigationBar active="home" />
    </HomeWrapper>
  );
}
