import React, { useState } from "react";
import SlideRule from "react-slide-rule";

export default React.memo(function ({ value, onChange }) {
  //   const [value, setValue] = useState(150);
  const [ref, setRef] = useState(null);
  const width = ref?.offsetWidth;

  return (
    <div ref={setRef} className="example-basic example-custom-cursor">
      <SlideRule
        style={{
          borderTopLeftRadius: "100% 80px",
          borderTopRightRadius: "100% 80px",
        }}
        value={value}
        min={0}
        max={300}
        onChange={onChange}
        width={width}
        markStyle={{ top: 10, height: 75, color: "#7B66FF" }}
        smallerMarkStyle={{ top: 35, height: 45, color: "#C3FF4D" }}
        numberStyle={{ color: "transparent" }}
        cursor={<CustomCursor />}
      />
    </div>
  );
});

const CustomCursor = React.memo(function () {
  return <div className="custom-cursor" />;
});
