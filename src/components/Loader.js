import React from "react";
import { useClockContext } from "../context/ClockContext";

const Loader = () => {
  const { greet } = useClockContext();
  let loaderDiv;
  let pinWheelLine;
  if (greet === "morning" || greet === "afternoon") {
    loaderDiv = "loader-div-light";
    pinWheelLine = "pinwheel__line-light ";
  } else {
    loaderDiv = "loader-div-dark";
    pinWheelLine = "pinwheel__line-dark ";
  }

  return (
    <main
      className={`loader-div ${loaderDiv} d-flex justify-content-center align-items-center`}
    >
      <div className="pinwheel">
        <div className={`pinwheel__line ${pinWheelLine}`}></div>
        <div className={`pinwheel__line ${pinWheelLine}`}></div>
        <div className={`pinwheel__line ${pinWheelLine}`}></div>
        <div className={`pinwheel__line ${pinWheelLine}`}></div>
        <div className={`pinwheel__line ${pinWheelLine}`}></div>
        <div className={`pinwheel__line ${pinWheelLine}`}></div>
      </div>
    </main>
  );
};

export default Loader;
