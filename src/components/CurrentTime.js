import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const CurrentTime = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState("am");
  const { countryTimezone } = useGlobalContext();

  // Current Time Function
  const currentTime = () => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();

    if (h === 0) {
      h = 12;
    } else if (h > 12) {
      h = h - 12;
      setPeriod("pm");
    }

    if (m < 10) {
      m = "0" + m;
    }

    setHour(h);
    setMinute(m);
  };

  useEffect(() => {
    setInterval(currentTime, 1000);
  }, []);

  return (
    <>
      <h1 className="digital-clock">
        {hour}:{minute}
      </h1>
      <div className="clock-info d-flex flex-column align-items-end justify-content-end">
        <h6>{period}</h6>
        <h6>{countryTimezone.abbreviation}</h6>
      </div>
    </>
  );
};

export default CurrentTime;
