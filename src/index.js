import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./context/ContextProvider";
import App from "./pages/App";

const root = createRoot(document.getElementById("App"));
root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
