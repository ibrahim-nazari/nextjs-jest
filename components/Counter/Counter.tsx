import React, { useState } from "react";
type props = {
  defaultCount: number;
  description: string;
};
const Counter = (props: props) => {
  const { description, defaultCount } = props;
  const [count, setCount] = useState(defaultCount);
  return (
    <div>
      <h2>
        DESC: {description} -DC: {defaultCount}
      </h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>Current Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
