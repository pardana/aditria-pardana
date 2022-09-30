import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import aditriaPardana from "../assets/img/AditriaPardana.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { useState, useEffect } from "react";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Frontend Developer",
    "Web Designer",
    "Web Developer",
    "Graphic Design",
    "Content Creator",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img src={aditriaPardana} alt="Aditria Pardana" />
            {/* <h2 className="wrap"> {text}</h2> */}
          </Col>

          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn animate__delay-0s"
                      : ""
                  }
                >
                  <span className="tagline">Aditria P. Pardana, S. Kom.</span>
                  <p>
                    "Hello World! I'm a
                    <span style={{ color: "#7569D8" }}>
                      {" "}
                      Frontend Developer
                    </span>{" "}
                    and learner who is always creating and learning amazing
                    things. Let's start scrolling and learn more about me".
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
