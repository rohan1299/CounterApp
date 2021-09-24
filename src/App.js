import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./api";
import Counter from "./Counter";
import CounterValue from "./CounterValue";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initState = async () => {
      const val = await getAPIValue();
      changeCounter(val.data);
    };

    initState();
  }, []);

  useEffect(() => {
    const setAPIValue = async (val) => {
      setLoading(true);
      const body = { counter40: val };
      await API.put("/front-end.json", body);
      setLoading(false);
    };

    setAPIValue(counter);
  }, [counter]);

  const getAPIValue = async () => {
    return await API.get("/front-end/counter1.json");
  };

  const incrementCounter = () => {
    if (counter + 1 <= 1000) {
      setCounter(counter + 1);
    } else {
      setCounter(1000);
    }
  };
  const decrementCounter = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(1);
    }
  };
  const changeCounter = (val) => {
    if (!val || val < 0) {
      setCounter(1);
    } else if (val > 1000) {
      setCounter(1000);
    } else {
      setCounter(val);
    }
  };

  return (
    <div>
      {loading ? (
        <div> 
          <div  className="circle"> </div>
          <p className="save">Saving Counter Value</p>
        </div>
      ) : (
        <div>
          <p> </p>
        </div>
      )}
      <Counter
        counter={counter}
        increment={incrementCounter}
        decrement={decrementCounter}
        change={changeCounter}
      />
      <CounterValue counter={counter} />
    </div>
  );
};

export default App;