import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Counter Application</h2>
      <h1>{count}</h1>

      <button className="btn increment" onClick={increment}>
        Increment
      </button>

      <button className="btn decrement" onClick={decrement}>
        Decrement
      </button>

      <button className="btn reset" onClick={reset}>
        Reset
      </button>

      {count === 10 && (
        <p className="message">🎉 You reached the target value!</p>
      )}
    </div>
  );
}

export default Counter;
