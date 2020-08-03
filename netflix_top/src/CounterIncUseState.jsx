import React, { useState } from "react";

const CounterIncUseState = () => {
  const [count, setCount] = useState(0);
  const IncCount = () => {
    setCount(count + 1);
  };

  let newTime = new Date().toLocaleTimeString();
  const [count1, setCount1] = useState(newTime);
  const GetTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCount1(newTime);
  };
  /*setInterval(() => {
    GetTime();
  }, 1);*/
  setInterval(GetTime, 1000);

  return (
    <React.Fragment>
      <h1>Time: {newTime}</h1>
      <button onClick={GetTime}>Click</button>

      <h1>Counter: {count}</h1>
      <button onClick={IncCount}>Click</button>
    </React.Fragment>
  );
};

export default CounterIncUseState;
