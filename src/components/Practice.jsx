import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Practice = () => {
  const [timer, setTimer] = useState(59);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isActive && timer > -5) {
      intervalId = setInterval(() => {
        return setTimer((prev) => prev - 1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isActive, timer]);

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setTimer(59);
    setIsActive(false);
  };
  return (
    <div>
      <p>{timer}</p>
      <button onClick={handleStartPause}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Practice;
