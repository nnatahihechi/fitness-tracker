import React from "react";
import { InfoBoxContainer } from "./style";
import { Typography } from "antd";
import Icon from "@ant-design/icons";

const { Text, Title } = Typography;
export default function InfoBox({ title, icon, text }) {
  return (
    <InfoBoxContainer>
      <div className="header">
        <Title level={5} className="title">
          {title}
        </Title>
        <Icon component={icon} />
      </div>
      <div className="content">
        <Text strong>{text}</Text>
      </div>
    </InfoBoxContainer>
  );
}
