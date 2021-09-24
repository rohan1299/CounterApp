import React from "react";
import "./CounterValue.css";

const CounterValue = ({ counter }) => {
  return (
    <div className="lower">
      <h4> Counter Value:</h4>
      <p className="lower1"> {counter} </p>
    </div>
  );
};

export default React.memo(CounterValue);