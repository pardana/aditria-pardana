import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logoHtml from "../assets/img/logo-html.png";
import logoCss from "../assets/img/logo-css.png";
import logoJavascript from "../assets/img/logo-javascript.png";
import logoReact from "../assets/img/logo-reactjs.png";
import logoBootstrap from "../assets/img/logo-bootstrap.png";
import logoCodeigniter from "../assets/img/logo-codeigniter.png";
import logoGit from "../assets/img/logo-git.png";
import logoMysql from "../assets/img/logo-mysql.png";
import logoFigma from "../assets/img/logo-figma.png";
import logoPhotoshop from "../assets/img/logo-photoshop.png";
import logoImovie from "../assets/img/logo-imovie.png";
import colorSharp from "../assets/img/color-sharp.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="mb-5">My Skills</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p> */}

              <Carousel
                className="skill-slider"
                responsive={responsive}
                infinite={true}
                swipeable={true}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                <div className="item">
                  <img src={logoHtml} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={logoCss} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={logoJavascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={logoReact} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={logoBootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={logoCodeigniter} alt="Image" />
                  <h5>CodeIgniter</h5>
                </div>
                <div className="item">
                  <img src={logoMysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={logoGit} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={logoFigma} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={logoPhotoshop} alt="Image" />
                  <h5>Photoshop</h5>
                </div>
                <div className="item">
                  <img src={logoImovie} alt="Image" />
                  <h5>iMovie</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img
        src={colorSharp}
        className="background-image-left"
        alt="Color Sharp"
      />
    </section>
  );
}
