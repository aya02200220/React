import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>UP or Down number *won't be minus</p>
      <p>Current count: {count}</p>
      <button onClick={countUp}>UP</button>
      <button onClick={countDown}>DOWN</button>
      <hr />
    </div>
  );
};
export default Counter;
