import React from "react";
import { HeaderWrapper } from "./style";

export default function Headers({ prefix, heading, suffix }) {
  return (
    <HeaderWrapper prefix={prefix}>
      {prefix && <div className="prefix">{prefix}</div>}
      <div className="heading">{heading}</div>
      <div className="suffix">{suffix}</div>
    </HeaderWrapper>
  );
}
