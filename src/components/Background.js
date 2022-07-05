import React from "react";
import { useClockContext } from "../context/ClockContext";

const Background = () => {
  const { greet } = useClockContext();
  let backgroundClass;
  if (greet === "morning") {
    backgroundClass = "morning";
  } else if (greet === "afternoon") {
    backgroundClass = "afternoon";
  } else if (greet === "evening") {
    backgroundClass = "evening";
  } else {
    backgroundClass = "night";
  }

  return (
    <div className={`background ${backgroundClass}`}>
      <div className="background-top"></div>
    </div>
  );
};

export default Background;
