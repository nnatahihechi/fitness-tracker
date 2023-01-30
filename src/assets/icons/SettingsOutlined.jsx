import React from "react";

export default function SettingsOutlined({ fill, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      transform="scale(1 -1)"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".716"
        d="M3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-6 8h12M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}
