import { Row, Col, Typography, Progress } from "antd";
import React from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import { BmiContainer } from "./style";
import { Circle } from "../../assets/icons";
import Icon from "@ant-design/icons";

const { Title, Text } = Typography;

export default function BmiStatus({ title, value }) {
  return (
    <BmiContainer>
      <div className="header">
        <Title level={5} className="title">
          {title}
        </Title>
        <div className="value">
          <Text>{value}</Text>
          <CaretUpOutlined />
        </div>
      </div>
      <Row gutter={8}>
        <Col span={8}>
          <Progress
            percent={70}
            showInfo={false}
            strokeColor="#C3FF4D"
            trailColor="#f2ffe0"
          />
        </Col>
        <Col span={8}>
          <Progress
            percent={0}
            showInfo={false}
            trailColor="#F2EFFF"
            strokeColor="#7B66FF"
          />
        </Col>
        <Col span={8}>
          <Progress
            percent={0}
            showInfo={false}
            trailColor="#E5E0FF"
            strokeColor="#7B66FF"
          />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={8} className="bmi-value" offset={1}>
          18.5
        </Col>
        <Col span={8} className="bmi-value">
          25
        </Col>
      </Row>
      <Row gutter={8} className="bmi-indicators">
        <Col className="indicators">
          <Icon component={Circle} style={{ color: "#C3FF4D" }} />
          <Text>Low</Text>
        </Col>
        <Col className="indicators">
          <Icon component={Circle} style={{ color: "#F2EFFF" }} />
          <Text>Normal</Text>
        </Col>
        <Col offset={-1} className="indicators">
          <Icon component={Circle} style={{ color: "#7B66FF" }} />
          <Text>High</Text>
        </Col>
      </Row>
    </BmiContainer>
  );
}
