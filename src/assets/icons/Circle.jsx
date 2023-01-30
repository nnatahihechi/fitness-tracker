import React from "react";

export default function Circle(props) {
  const { fill } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M256 42.667c117.82 0 213.333 95.512 213.333 213.333 0 117.82-95.512 213.333-213.333 213.333-117.82 0-213.333-95.512-213.333-213.333 0-117.82 95.512-213.333 213.333-213.333Z"
      />
    </svg>
  );
}
