import React, { useState, useEffect } from "react";
import "./Timer.css"; // Import the CSS file

const Timer = () => {
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setTime((prev) => (prev >= 59 ? 0 : prev + 1));
        if (time === 59) {
          setMin((prev) => prev + 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, time]);

  const handleTimer = () => {
    setIsActive((prev) => !prev);
    console.log(isActive);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">
        Timer: {min} min : {time} s
      </h1>
      <button
        className={`timer-button ${isActive ? "active" : ""}`}
        onClick={handleTimer}
      >
        {isActive ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
};

export default Timer;
