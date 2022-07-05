import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../context/GlobalContext";
import { useClockContext } from "../context/ClockContext";

const AdditionalInfo = () => {
  const { additional, countryTimezone } = useGlobalContext();
  const { greet } = useClockContext();
  let additionalBorderStyle;
  let additionalColor;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (greet === "morning" || greet === "afternoon") {
    additionalColor = "additional-info-day";
    if (window.innerWidth <= 768) {
      additionalBorderStyle = {
        border: "none",
      };
    } else {
      additionalBorderStyle = {
        borderRight: "2px solid #000",
      };
    }
  } else {
    additionalColor = "additional-info-night";
    if (window.innerWidth <= 768) {
      additionalBorderStyle = {
        border: "none",
      };
    } else {
      additionalBorderStyle = {
        borderRight: "2px solid #fff",
      };
    }
  }

  const calendar = new Date();
  let year = calendar.getFullYear();
  let month = calendar.getMonth();
  let day = calendar.getDate();

  return (
    <article
      className={
        additional
          ? `additional ${additionalColor} more`
          : `additional ${additionalColor}`
      }
    >
      <Container>
        <Row>
          <Col
            className="d-flex additional-info flex-lg-column flex-md-column flex-sm-row justify-content-lg-center justify-content-md-center justify-content-sm-between justify-content-between"
            lg={6}
            md={6}
            sm={12}
            style={additionalBorderStyle}
          >
            <p>current timezone</p>
            <h6>{countryTimezone.timezone}</h6>
          </Col>
          <Col
            className="d-flex additional-info flex-lg-column flex-md-column flex-sm-row justify-content-lg-center justify-content-md-center justify-content-sm-between justify-content-between"
            lg={6}
            md={6}
            sm={12}
          >
            <p>year</p>
            <h6>{year}</h6>
          </Col>
          <Col
            className="d-flex additional-info flex-lg-column flex-md-column flex-sm-row justify-content-lg-center justify-content-md-center justify-content-sm-between justify-content-between"
            lg={6}
            md={6}
            sm={12}
            style={additionalBorderStyle}
          >
            <p>month</p>
            <h6>{months[month]}</h6>
          </Col>
          <Col
            className="d-flex additional-info flex-lg-column flex-md-column flex-sm-row justify-content-lg-center justify-content-md-center justify-content-sm-between justify-content-between"
            lg={6}
            md={6}
            sm={12}
          >
            <p>day/number</p>
            <h6>{day}</h6>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default AdditionalInfo;
