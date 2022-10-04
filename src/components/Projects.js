import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import uiuxGofurniture1 from "../assets/img/uiux-gofurniture1.jpg";
import uiuxGofurniture2 from "../assets/img/uiux-gofurniture2.jpg";
import uiuxGofurniture3 from "../assets/img/uiux-gofurniture3.jpg";

import uiuxiCation1 from "../assets/img/uiux-ication1.jpg";
import uiuxiCation2 from "../assets/img/uiux-ication2.jpg";
import uiuxiCation3 from "../assets/img/uiux-ication3.jpg";
import uiuxiCation4 from "../assets/img/uiux-ication4.jpg";

import uiuxiNada1 from "../assets/img/uiux-inada1.jpg";
import uiuxiNada2 from "../assets/img/uiux-inada2.jpg";
import uiuxiNada3 from "../assets/img/uiux-inada3.jpg";

import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Projects() {
  const projects = [
    {
      title: "UI/UX Web",
      imgUrl: uiuxGofurniture1,
      tech: "Figma",
      description: "UI/UX Design GOFURniture (Web Furniture)",
      imgDetails: {
        names: [uiuxGofurniture1, uiuxGofurniture2, uiuxGofurniture3],
      },
    },
    {
      title: "UI/UX Web",
      imgUrl: uiuxiCation1,
      tech: "Figma",
      description: "UI/UX Design iCation (Hotel Vacation)",
      imgDetails: {
        names: [uiuxiCation1, uiuxiCation2, uiuxiCation3, uiuxiCation4],
      },
    },
    {
      title: "UI/UX Mobile",
      imgUrl: uiuxiNada1,
      tech: "Figma",
      description: "UI/UX Design iNada (Music Player)",
      imgDetails: {
        names: [uiuxiNada2, uiuxiNada1, uiuxiNada3],
      },
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__slideInUp animate__delay-0s"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p> */}
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">UI/UX Design</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" />
    </section>
  );
}
