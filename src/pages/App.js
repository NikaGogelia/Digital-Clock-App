import "../styles/desktop.css";
import "../styles/tablet.css";
import "../styles/mobile.css";
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Container } from "react-bootstrap";
import Loader from "../components/Loader";
import ClockDiv from "../components/ClockDiv";
import AdditionalInfo from "../components/AdditionalInfo";
import Background from "../components/Background";

function App() {
  const { loader, additional } = useGlobalContext();

  if (loader) return <Loader />;
  return (
    <>
      <Background />
      <main className={additional ? "clock-app clock-up" : "clock-app"}>
        <Container>
          <ClockDiv />
        </Container>
      </main>
      <AdditionalInfo />
    </>
  );
}

export default App;
