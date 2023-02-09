import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import aditriaPardana from "../assets/img/AditriaPardana.jpg";
import indonesiaFlag from "../assets/img/indonesia-flag.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { useState, useEffect } from "react";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeLink, setActiveLink] = useState("contact");
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5} className="format-picture">
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
                  <h2>Aditria Pardana</h2>
                  <p style={{ textAlign: "justify" }}>
                    Hola! I'm a
                    <span style={{ color: "#7569D8" }}>
                      {" "}
                      Frontend Developer
                    </span>{" "}
                    for 5+ years. I have been working with several clients in
                    the past, and they love my work! So I will be a valuable
                    assets to your company.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Let me hear what you have in mind for me to develop for your
                    next apps! Let's start scrolling and learn more about me.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Remote worker from Indonesia &#127470;&#127465;{" "}
                  </p>
                  <Row className="align-items-center">
                    <Col xs={12} md={6} xl={3}>
                      <Nav.Link
                        href="#contact"
                        className={
                          activeLink === "contact"
                            ? "active navbar-link"
                            : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("contact")}
                      >
                        <button className="tagline form-control">
                          Hire Me
                          <Icon.PhoneVibrate size={20} color="white" />
                        </button>
                      </Nav.Link>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                      <a
                        href="https://resume.showwcase.com/appardana.pdf"
                        target="_blank"
                      >
                        <button
                          className="tagline-second form-control"
                          onClick={() => console.log("connect")}
                        >
                          View CV
                          <Icon.ArrowDownCircle size={20} color="white" />
                        </button>
                      </a>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
