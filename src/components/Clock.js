import React, { useState, useEffect } from "react";
import { useClockContext } from "../context/ClockContext";
import { useGlobalContext } from "../context/GlobalContext";
import { Container, Row, Col } from "react-bootstrap";
import CurrentTime from "./CurrentTime";

const Clock = () => {
  const [temperature, setTemperature] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");
  const { currentCountry, main, weather, additional, handleDiv } =
    useGlobalContext();
  const { greet } = useClockContext();
  const { city, country } = currentCountry;

  useEffect(() => {
    if (main !== undefined) {
      setTemperature(main.temp);
    }
  }, [main]);

  useEffect(() => {
    if (weather !== undefined) {
      setWeatherDesc(weather[0].description);
    }
  }, [weather]);

  return (
    <article className="clock">
      <Container>
        <Row>
          <Col className="d-flex flex-column" lg={10}>
            <div className="daytime d-flex align-items-center">
              <div className="daytime-icon-div d-flex align-items-center">
                <img
                  className={
                    greet === "afternoon" || greet === "morning"
                      ? "sun daytime-icon"
                      : "moon daytime-icon"
                  }
                  src={
                    greet === "afternoon" || greet === "morning"
                      ? "./assets/icons/icon-sun.svg"
                      : "./assets/icons/icon-moon.svg"
                  }
                  alt="daytime-icon"
                />
              </div>
              <h6 className="greet">
                good {greet}, it's currently {weatherDesc},{" "}
                <span className="temperature">
                  {Math.floor(temperature)}&#8451;
                </span>
                .
              </h6>
            </div>
            <div className="currentTime d-flex">
              <CurrentTime />
            </div>
            <h5 className="city">
              in {city}, {country}
            </h5>
          </Col>
          <Col
            className="additional-button-div d-flex justify-content-lg-center align-items-end"
            lg={2}
          >
            <button className="additional-div-button" onClick={handleDiv}>
              {additional ? "less" : "more"}{" "}
              <span>
                <img
                  className={additional ? "arrow-icon rotate" : "arrow-icon"}
                  src="./assets/icons/icon-arrow-up.svg"
                  alt="arrow-icon"
                />
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Clock;
