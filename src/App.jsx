import { useState } from 'react';
import "./count.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("beige");

  const increment = () => {
    // setCount(count+1);
    setCount(count < 10 ? count + 1 : count);
    setBackgroundColor(count === 9 ? "pink" : backgroundColor);
  };

  const decrement = () => {
    // setCount(count-1);
    setCount(count > 0 ? count - 1 : count);
    setBackgroundColor(count === 1 ? "green" : backgroundColor);
  };

  const reset = () => {
    setCount(0);
    setBackgroundColor("lightgrey");
  };

  return (
    <div className="counter-container" style={{ backgroundColor }}>
      <h1>Counter</h1>
      <p className="count">Count: {count}</p>
      <button onClick={increment} className="button">Increase</button>
      <button onClick={decrement} className="button">Decrease</button>
      <button onClick={reset} className="button">Reset</button>
    </div>
  );
}

export default Counter;
