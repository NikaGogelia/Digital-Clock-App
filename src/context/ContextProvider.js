import React from "react";
import GlobalContextProvider from "./GlobalContext";
import ClockContextProvider from "./ClockContext";

const ContextProvider = ({ children }) => {
  return (
    <GlobalContextProvider>
      <ClockContextProvider>{children}</ClockContextProvider>
    </GlobalContextProvider>
  );
};

export default ContextProvider;
