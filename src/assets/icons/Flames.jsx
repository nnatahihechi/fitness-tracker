import React from "react";

export default function Flames({ width = 200, height = 200, fill = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={fill}
      strokeWidth="3"
      viewBox="0 0 64 64"
    >
      <path
        stroke-linecap="round"
        d="M37.34 7.36a.12.12 0 0 1 .18.13c-.47 1.86-2.78 12.63 5.57 19.62 8.16 6.84 8.41 17.13 2.33 24-7.27 8.23-19.84 6.78-25.25 1.37C16.36 48.69 9.44 36.33 21.29 26a.1.1 0 0 1 .16 0c.29 1.23 2.3 9 7.66 10 .25 0 .37-.11.25-.34-1.58-3.06-8.7-18.66 7.98-28.3Z"
      />
    </svg>
  );
}
