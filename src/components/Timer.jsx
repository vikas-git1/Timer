import React, { useState, useEffect } from "react";
import "./Timer.css"; // Import the CSS file

const Timer = () => {
  const [timer, setTimer] = useState(59);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isActive && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isActive, timer]);

  const handleStart = () => setIsActive((prev) => !prev);
  const handleRestart = () => {
    setIsActive(false);
    setTimer(59);
  };
  return (
    <div className="timer-container">
      <h1 className="timer-display">{timer} sec</h1>

      <div className="btn_container">
        <button
          className={`button ${isActive ? "start_btn_active" : ""}`}
          onClick={handleStart}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className={`button`} onClick={handleRestart}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
