import React from "react";
import { WorkoutListContainer } from "./style";
import Icon from "@ant-design/icons";
import { Play } from "../../assets/icons";
import { Typography } from "antd";

const { Text } = Typography;

export default function WorkOutList({ icon, text, showPlay = true }) {
  return (
    <WorkoutListContainer showPlay={showPlay}>
      <div className="icon">
        <Icon component={icon} style={{ color: "#7B66FF" }} />
      </div>
      <div className="text">
        <Text className="text">{text}</Text>
      </div>
      {showPlay && (
        <div className="icon play">
          <Icon component={Play} style={{ color: "#C3FF4D" }} />
        </div>
      )}
    </WorkoutListContainer>
  );
}
