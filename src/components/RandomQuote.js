import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../context/GlobalContext";

const RandomQuote = () => {
  const { quotes, randomQuote } = useGlobalContext();
  const { author, content } = quotes;
  const [rotate, setRotate] = useState(false);

  return (
    <article className="quotes">
      <Container>
        <Row className="quotes-row">
          <Col>
            <div className="quote-author">
              <p>"{content}"</p>
              <h6>{author}</h6>
            </div>
          </Col>
          <Col>
            <button
              className="random-quote-button d-flex align-items-center"
              onClick={() => {
                setRotate(true);
                setTimeout(() => setRotate(false), 500);
                randomQuote();
              }}
            >
              <img
                className={rotate ? "rotate-refresh" : null}
                src="./assets/icons/icon-refresh.svg"
                alt="refresh-icon"
              />
            </button>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default RandomQuote;
