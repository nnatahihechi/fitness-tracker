import { ProgressContainer } from "./style";
import React from "react";
import { Progress, Row, Typography } from "antd";
import Icon from "@ant-design/icons";

const { Title, Text } = Typography;
export default function ProgressInfo({
  icon,
  isTime,
  text,
  description,
  progress,
}) {
  return (
    <ProgressContainer>
      <Row className="progressContainer">
        <div className="icon">
          <Icon component={icon} style={{ color: "#7B66FF" }} />
        </div>
        <div className="details">
          <Title level={4} className="text">
            {text} <span>{isTime && "min"}</span>
          </Title>
          <Text className="desc">{description}</Text>
          <Progress percent={progress} strokeColor="#C3FF4D" showInfo={false} />
        </div>
      </Row>
    </ProgressContainer>
  );
}
