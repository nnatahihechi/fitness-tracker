import React from "react";

export default function Graph(props) {
  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".36"
      viewBox="0 0 24 24"
      {...props}
      fill="none"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}
