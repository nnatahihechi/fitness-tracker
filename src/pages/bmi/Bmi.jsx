import React, { useState } from "react";
import { BmiWrapper } from "./style";
import { ButtonSelect, Headers, InfoBox } from "../../components";
import { Typography } from "antd";
import Icon, { LeftOutlined, SettingOutlined } from "@ant-design/icons";
import { SettingsOutlined } from "../../assets/icons";
import { SlideRule } from "../../assets/charts";
import { Link } from "react-router-dom";

const { Title } = Typography;
export default function Bmi() {
  const [value, setValue] = useState(52.3);
  return (
    <BmiWrapper>
      <div className="main-container">
        <Headers
          prefix={<LeftOutlined />}
          heading={<Title level={3}>Add Weight</Title>}
          suffix={
            <Icon component={SettingsOutlined} style={{ color: "#000" }} />
          }
        />
        <div className="bmi-value">
          <span>{value}</span>
        </div>
        <div className="rule">
          <SlideRule value={value} onChange={setValue} />
        </div>
        <div className="two-split">
          <div className="item">
            <ButtonSelect label="Male" backgroundColor="#fff" />
          </div>
          <div className="item">
            <ButtonSelect label="Female" backgroundColor="#fff" />
          </div>
        </div>
        <div className="two-split">
          <div className="item">
            <InfoBox title="Age" icon={SettingOutlined} text={21} />
          </div>
          <div className="item">
            <InfoBox title="Height" icon={SettingOutlined} text={173} />
          </div>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "unset" }}>
        <div className="button-select-bottom">
          <ButtonSelect
            label="Save"
            backgroundColor="#7B66FF"
            style={{ color: "#fff", marginBottom: "20px", width: "60%" }}
            padding="8px 0"
          />
        </div>
      </Link>
    </BmiWrapper>
  );
}
