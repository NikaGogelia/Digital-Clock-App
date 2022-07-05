import React, { createContext, useContext, useState, useEffect } from "react";

const ClockContext = createContext();

const ClockContextProvider = ({ children }) => {
  const [greet, setGreet] = useState("");
  const greeting = new Date();
  const hours = greeting.getHours();

  useEffect(() => {
    if (hours >= 5 && hours <= 12) {
      setGreet("morning");
    } else if (hours > 12 && hours <= 17) {
      setGreet("afternoon");
    } else if (hours > 17 && hours <= 20) {
      setGreet("evening");
    } else {
      setGreet("night");
    }
  }, [hours]);

  return (
    <ClockContext.Provider value={{ greet }}>{children}</ClockContext.Provider>
  );
};

export default ClockContextProvider;
export const useClockContext = () => {
  return useContext(ClockContext);
};
