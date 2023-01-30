import React from "react";
import { ButtonSelectContainer } from "./style";

export default function ButtonSelect({ label, ...props }) {
  return <ButtonSelectContainer {...props}>{label}</ButtonSelectContainer>;
}
