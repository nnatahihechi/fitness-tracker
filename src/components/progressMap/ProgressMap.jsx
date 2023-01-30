import React from "react";
import { ProgressContainer } from "./style";

import { Typography } from "antd";

const { Text } = Typography;
export default function ProgressMap({ value, title, chart }) {
  return (
    <ProgressContainer>
      <div className="info">
        <Text>{title}</Text>
        {value}
      </div>
      <div className="graph">{chart}</div>
    </ProgressContainer>
  );
}
