import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [myCount, setMyCount] = useState(initialValue);

  const increment = (value = 1) => {
    setMyCount((prev) => prev + value);
  };
  const decrement = () => {
    setMyCount((prev) => prev - value);
  };
  const reset = () => {
    setMyCount(initialValue);
  };

  return {
    myCount,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
