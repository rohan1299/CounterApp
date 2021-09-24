import React from "react";
import "./Counter.css";

const Counter = ({ counter, increment, decrement, change }) => {
  return (
    <div className="fixed">
      <button className="button1" onClick={decrement}>-</button>

      <input
        className="text"
        type="text"
        value={counter}
        onChange={({ target }) => {
          change(parseInt(target.value));
        }}
      ></input>
      <button className="button2" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;


