import React, { memo, useMemo } from "react";

const Child = ({ count, handleCount }: any) => {
  console.log("im children");

  //useMemo for large calculation
  const childNum = useMemo(() => {
    let number = 0;
    for (let i = 0; i < 500000000; i++) {
      number++;
    }
    return number;
  }, []);
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "50px",
        margin: "40px",
      }}
    >
      <h1>
        {childNum} i'm children {count}
      </h1>
      <button onClick={handleCount}>Plus</button>
    </div>
  );
};
//memo for prevent unnecessary render
export default memo(Child);
