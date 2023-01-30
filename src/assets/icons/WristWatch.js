import React from "react";

export default function WristWatch({ fill, height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        d="M17.68 15.44 16 17H8l-1.68-1.56a1 1 0 0 1-.32-.73V9.29a1 1 0 0 1 .32-.73L8 7h8l1.68 1.56a1 1 0 0 1 .32.73v5.42a1 1 0 0 1-.32.73Z"
        style={{ fill: "none", strokeWidth: 0.624 }}
      />
      <path
        d="M8 3v4h8V3Zm8 18v-4H8v4Zm1.68-5.56L16 17H8l-1.68-1.56a1 1 0 0 1-.32-.73V9.29a1 1 0 0 1 .32-.73L8 7h8l1.68 1.56a1 1 0 0 1 .32.73v5.42a1 1 0 0 1-.32.73Z"
        style={{
          fill: "none",
          stroke: fill,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 0.624,
        }}
      />
    </svg>
  );
}
