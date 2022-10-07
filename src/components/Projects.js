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

import uiuxSGSIS1 from "../assets/img/uiux-sgsis1.png";
import uiuxSGSIS2 from "../assets/img/uiux-sgsis2.png";
import uiuxSGSIS3 from "../assets/img/uiux-sgsis3.png";
import uiuxSGSIS4 from "../assets/img/uiux-sgsis4.png";
import uiuxSGSIS5 from "../assets/img/uiux-sgsis5.png";
import uiuxSGSIS6 from "../assets/img/uiux-sgsis6.png";

import webPDMS1 from "../assets/img/web-PDMS1.png";
import webPDMS2 from "../assets/img/web-PDMS2.png";
import webPDMS3 from "../assets/img/web-PDMS3.png";
import webPDMS4 from "../assets/img/web-PDMS4.png";
import webPDMS5 from "../assets/img/web-PDMS5.png";
import webPDMS6 from "../assets/img/web-PDMS6.png";

import webIcargo0 from "../assets/img/web-icargo0.png";
import webIcargo1 from "../assets/img/web-icargo1.png";
import webIcargo2 from "../assets/img/web-icargo2.png";
import webIcargo3 from "../assets/img/web-icargo3.png";
import webIcargo4 from "../assets/img/web-icargo4.png";

import webPOS1 from "../assets/img/web-POS1.png";
import webPOS2 from "../assets/img/web-POS2.png";
import webPOS3 from "../assets/img/web-POS3.png";
import webPOS4 from "../assets/img/web-POS4.png";
import webPOS5 from "../assets/img/web-POS5.png";

import webFloret1 from "../assets/img/web-Floret1.png";
import webFloret2 from "../assets/img/web-Floret2.png";
import webFloret3 from "../assets/img/web-Floret3.png";
import webFloret4 from "../assets/img/web-Floret4.png";

import webLuxspace0 from "../assets/img/web-luxspace0.jpg";
import webLuxspace1 from "../assets/img/web-luxspace1.jpg";
import webLuxspace2 from "../assets/img/web-luxspace2.jpg";
import webLuxspace3 from "../assets/img/web-luxspace3.jpg";
import webLuxspace4 from "../assets/img/web-luxspace4.jpg";
import webLuxspace5 from "../assets/img/web-luxspace5.jpg";
import webLuxspace6 from "../assets/img/web-luxspace6.jpg";

import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Projects() {
  const projectsUIUX = [
    {
      title: "Gofurniture",
      imgUrl: uiuxGofurniture1,
      tech: "Figma",
      description: "UI/UX Web Design GOFURniture (Web Furniture)",
      imgDetails: {
        names: [uiuxGofurniture1, uiuxGofurniture2, uiuxGofurniture3],
      },
    },
    {
      title: "SGSIS",
      imgUrl: uiuxSGSIS1,
      tech: "Figma",
      description: "UI/UX Mobile SGSIS",
      imgDetails: {
        names: [
          uiuxSGSIS1,
          uiuxSGSIS2,
          uiuxSGSIS5,
          uiuxSGSIS6,
          uiuxSGSIS3,
          uiuxSGSIS4,
        ],
      },
    },
    {
      title: "iCation",
      imgUrl: uiuxiCation1,
      tech: "Figma",
      description: "UI/UX Web Design iCation (Hotel Vacation)",
      imgDetails: {
        names: [uiuxiCation1, uiuxiCation2, uiuxiCation3, uiuxiCation4],
      },
    },
    {
      title: "iNada",
      imgUrl: uiuxiNada1,
      tech: "Figma",
      description: "UI/UX Mobile iNada (Music Player)",
      imgDetails: {
        names: [uiuxiNada2, uiuxiNada1, uiuxiNada3],
      },
    },
  ];

  const projectsWeb = [
    {
      title: "PDMS",
      imgUrl: webPDMS1,
      tech: "HTML5, CSS3, jQuery, Bootstrap, PHP Gata Framework",
      description: "PDMS (Product Development Manufacture System)",
      imgDetails: {
        names: [webPDMS1, webPDMS2, webPDMS3, webPDMS4, webPDMS5, webPDMS6],
      },
    },
    {
      title: "iCargo",
      imgUrl: webIcargo0,
      tech: "HTML5, CSS3, Bootstrap, PHP Codeigniter",
      description: "iCargo DO (Delivery Order)",
      imgDetails: {
        names: [webIcargo1, webIcargo2, webIcargo3, webIcargo4],
      },
    },
    {
      title: "SGS POS",
      imgUrl: webPOS1,
      tech: "HTML5, CSS3, jQuery, Bootstrap, PHP Gata Codeigniter",
      description: "SGS POS (Point of Sales)",
      imgDetails: {
        names: [webPOS1, webPOS2, webPOS3, webPOS4, webPOS5],
      },
    },
    {
      title: "Floret POS",
      imgUrl: webFloret1,
      tech: "HTML5, CSS3, jQuery, Bootstrap, PHP Gata Codeigniter",
      description: "Floret POS (Point of Sales)",
      imgDetails: {
        names: [webFloret1, webFloret2, webFloret3, webFloret4],
      },
    },
    {
      title: "iCation",
      imgUrl: uiuxiCation1,
      tech: "HTML5, CSS3, React JS, Bootstrap",
      description: "iCation (Hotel Vacation)",
      imgDetails: {
        names: [uiuxiCation1, uiuxiCation2, uiuxiCation3, uiuxiCation4],
      },
    },
    {
      title: "Lux Space",
      imgUrl: webLuxspace0,
      tech: "HTML5, CSS3, React JS, Tailwind",
      description: "Lux Space (Web Furniture like Ikea)",
      imgDetails: {
        names: [
          webLuxspace1,
          webLuxspace2,
          webLuxspace3,
          webLuxspace4,
          webLuxspace6,
          webLuxspace5,
        ],
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
                    {projectsUIUX.map((projectUIUX, index) => {
                      return <ProjectCard key={index} {...projectUIUX} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsWeb.map((projectWeb, index) => {
                      return <ProjectCard key={index} {...projectWeb} />;
                    })}
                  </Row>
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
