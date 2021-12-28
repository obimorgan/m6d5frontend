/** @format */

import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <Button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </Button>
        <Button className="btn" onClick={reset}>
          reset
        </Button>
        <Button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </Button>
      </section>
      <section>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <Button className="btn" onClick={complexIncrease}>
          increase
        </Button>
      </section>
    </>
  );
};

export default Counter;
