import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

import designAPF from "../assets/img/design-APF.jpg";
import designGemilang from "../assets/img/design-Gemilang.jpg";
import designJones from "../assets/img/design-Jones.jpg";
import designKATAR8 from "../assets/img/design-KATAR8.jpg";
import designRT03 from "../assets/img/design-RT03.jpg";

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

import webMRMS0 from "../assets/img/web-MRMS0.png";
import webMRMS1 from "../assets/img/web-MRMS1.png";
import webMRMS2 from "../assets/img/web-MRMS2.png";
import webMRMS3 from "../assets/img/web-MRMS3.png";
import webMRMS4 from "../assets/img/web-MRMS4.png";

import webLuxspace0 from "../assets/img/web-luxspace0.jpg";
import webLuxspace1 from "../assets/img/web-luxspace1.jpg";
import webLuxspace2 from "../assets/img/web-luxspace2.jpg";
import webLuxspace3 from "../assets/img/web-luxspace3.jpg";
import webLuxspace4 from "../assets/img/web-luxspace4.jpg";
import webLuxspace5 from "../assets/img/web-luxspace5.jpg";
import webLuxspace6 from "../assets/img/web-luxspace6.jpg";

import webTecnogas1 from "../assets/img/web-tecnogas1.jpg";
import webTecnogas2 from "../assets/img/web-tecnogas2.jpg";
import webTecnogas3 from "../assets/img/web-tecnogas3.jpg";

import webMutiara0 from "../assets/img/web-Mutiara0.jpg";
import webMutiara1 from "../assets/img/web-Mutiara1.jpg";
import webMutiara2 from "../assets/img/web-Mutiara2.jpg";
import webMutiara3 from "../assets/img/web-Mutiara3.jpg";
import webMutiara4 from "../assets/img/web-Mutiara4.jpg";

import webHLI0 from "../assets/img/web-HLI0.jpg";
import webHLI1 from "../assets/img/web-HLI1.jpg";
import webHLI2 from "../assets/img/web-HLI2.jpg";
import webHLI3 from "../assets/img/web-HLI3.jpg";
import webHLI4 from "../assets/img/web-HLI4.jpg";

import webWeddingMaryaniAditria0 from "../assets/img/web-WeddingMaryaniAditria0.jpeg";
import webWeddingMaryaniAditria2 from "../assets/img/web-WeddingMaryaniAditria2.jpg";

import webTravelAdvisor from "../assets/img/web-TravelAdvisor.png";

import webPapanmasEstate0 from "../assets/img/web-Papanmas-Estate0.png";
import webPapanmasEstate1 from "../assets/img/web-Papanmas-Estate.png";

import webAPTravel0 from "../assets/img/web-AP-Travel0.png";
import webAPTravel1 from "../assets/img/web-AP-Travel.png";

import ProjectCard from "./ProjectCard";
import "animate.css";
// import TrackVisibility from "react-on-screen";

export default function Projects() {
  const projectsWeb = [
    {
      title: "PDMS",
      imgUrl: webPDMS1,
      tech: "HTML5, CSS3, Javascript, jQuery, Bootstrap, PHP Gata Framework",
      description:
        "PDMS (Product Development Manufacture System) with PT. Martina Berto (Martha Tilaar Group)",
      imgDetails: {
        names: [webPDMS1, webPDMS2, webPDMS3, webPDMS4, webPDMS5, webPDMS6],
      },
    },
    {
      title: "iCargo",
      imgUrl: webIcargo0,
      tech: "HTML5, CSS3, Javascript, Bootstrap, PHP Codeigniter",
      description:
        "iCargo Modul DO Payment (Delivery Order) with PT. Integrasi Logistik Cipta Solusi",
      imgDetails: {
        names: [webIcargo1, webIcargo2, webIcargo3, webIcargo4],
      },
    },
    {
      title: "SGS POS",
      imgUrl: webPOS1,
      tech: "HTML5, CSS3, Javascript, jQuery, Bootstrap, PHP Gata Codeigniter",
      description:
        "SGS POS (Point of Sales) with PT. Sinergi Global Servis (Martha Tilaar Group)",
      imgDetails: {
        names: [webPOS1, webPOS2, webPOS3, webPOS4, webPOS5],
      },
    },
    {
      title: "Floret POS",
      imgUrl: webFloret1,
      tech: "HTML5, CSS3, Javascript, jQuery, Bootstrap, PHP Gata Codeigniter",
      description:
        "Floret POS (Point of Sales) with PT. Sinergi Global Servis (Martha Tilaar Group)",
      imgDetails: {
        names: [webFloret1, webFloret2, webFloret3, webFloret4],
      },
    },
    {
      title: "MRMS",
      imgUrl: webMRMS0,
      tech: "HTML5, CSS3, Javascript, Bootstrap, React JS",
      description:
        "App. MRMS (Meeting Room Management System) with PT. Corea System Indonesia",
      imgDetails: {
        names: [webMRMS1, webMRMS2, webMRMS3, webMRMS4],
      },
    },
    {
      title: "Tecnogas Indonesia",
      imgUrl: webTecnogas1,
      tech: "HTML5, CSS3, Javascript, React JS, Tailwind CSS",
      description: "Jasa Service Tecnogas Indonesia",
      linkUrl: "https://www.jasaservice-tecnogas.com/",
      imgDetails: {
        names: [webTecnogas1, webTecnogas2, webTecnogas3],
      },
    },
    {
      title: "CV. Mutiara Dunia",
      imgUrl: webMutiara0,
      tech: "Wordpress CMS",
      description: "Company Profile Percetakan di Bekasi",
      linkUrl: "https://mutiara-grafika.com/",
      imgDetails: {
        names: [
          webMutiara0,
          webMutiara1,
          webMutiara2,
          webMutiara3,
          webMutiara4,
        ],
      },
    },
    {
      title: "PT. HLI Green Power",
      imgUrl: webHLI0,
      tech: "Vite, Javascript, React JS, Tailwind CSS, Integrated API via Laravel",
      description:
        "Company Profile PT HLI Green Power will become the Number One Industry for Electric Vehicle Battery.",
      linkUrl: "https://hligreenpower.com/",
      imgDetails: {
        names: [webHLI0, webHLI1, webHLI2, webHLI3, webHLI4],
      },
    },
    {
      title: "Sylvia & Mesut",
      imgUrl: webWeddingMaryaniAditria0,
      tech: "Vite, Javascript, React JS, Tailwind CSS, Integrated API via Firebase",
      description: "Wedding Online Invitation",
      linkUrl: "/",
      imgDetails: {
        names: [webWeddingMaryaniAditria2],
      },
    },
  ];

  const projectsUIUX = [
    {
      title: "Gofurniture",
      imgUrl: uiuxGofurniture1,
      tech: "Figma",
      description: "UI/UX Web GOFURniture (Web Furniture)",
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
      description: "UI/UX Web iCation (Hotel Vacation)",
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
    {
      title: "PT. HLI Green Power",
      imgUrl: webHLI0,
      tech: "Figma",
      description:
        "UI/UX Company Profile PT HLI Green Power will become the Number One Industry for Electric Vehicle Battery.",
      imgDetails: {
        names: [webHLI0, webHLI1, webHLI2, webHLI3, webHLI4],
      },
    },
  ];

  const projectsExlporers = [
    {
      title: "iCation",
      imgUrl: uiuxiCation1,
      tech: "HTML5, CSS3, Javascript, React JS, Bootstrap",
      description: "iCation (Hotel Vacation)",
      linkUrl: "https://ication-iapptech.netlify.app/",
      imgDetails: {
        names: [uiuxiCation1, uiuxiCation2, uiuxiCation3, uiuxiCation4],
      },
    },
    {
      title: "Lux Space",
      imgUrl: webLuxspace0,
      tech: "HTML5, CSS3, Javascript, React JS, Tailwind CSS",
      description: "Lux Space (Web Furniture like Ikea)",
      linkUrl: "https://luxspace-roan.vercel.app/",
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
    {
      title: "Travel Advisor",
      imgUrl: webTravelAdvisor,
      tech: "HTML5, CSS3, Javascript, React JS, Material UI, Integrated via Rapid API",
      description: "Travel Apps",
      linkUrl: "https://travel-advisor-iapptech.netlify.app/",
      imgDetails: {
        names: [webTravelAdvisor],
      },
    },
    {
      title: "Papanmas Estate",
      imgUrl: webPapanmasEstate0,
      tech: "HTML5, CSS3, Javascript, Next JS, Chakra UI, Integrated via Rapid API",
      description: "Real Estate App",
      linkUrl: "https://papanmas-estate.vercel.app/",
      imgDetails: {
        names: [webPapanmasEstate1],
      },
    },
    {
      title: "AP Travel",
      imgUrl: webAPTravel0,
      tech: "HTML5, CSS3, Typescript, Next JS, Tailwind CSS, Integrated via Rapid API",
      description: "Travel Apps",
      linkUrl: "https://aptravel.vercel.app/",
      imgDetails: {
        names: [webAPTravel1],
      },
    },
  ];

  // const projectsDesign = [
  //   {
  //     title: "APF Graphia",
  //     imgUrl: designAPF,
  //     tech: "Photoshop",
  //     description: "Logo APF Graphia",
  //     imgDetails: {
  //       names: [designAPF],
  //     },
  //   },
  //   {
  //     title: "Karang Taruna RW08",
  //     imgUrl: designKATAR8,
  //     tech: "Photoshop",
  //     description: "Logo Karang Taruna RW08",
  //     imgDetails: {
  //       names: [designKATAR8],
  //     },
  //   },
  //   {
  //     title: "Gemilang Futsal Family",
  //     imgUrl: designGemilang,
  //     tech: "Photoshop",
  //     description: "Logo Gemilang Futsal Family",
  //     imgDetails: {
  //       names: [designGemilang],
  //     },
  //   },
  //   {
  //     title: "Jones FT",
  //     imgUrl: designJones,
  //     tech: "Photoshop",
  //     description: "Logo Jones FT",
  //     imgDetails: {
  //       names: [designJones],
  //     },
  //   },
  //   {
  //     title: "Pemuda RT03",
  //     imgUrl: designRT03,
  //     tech: "Photoshop",
  //     description: "Logo Pemuda RT03",
  //     imgDetails: {
  //       names: [designRT03],
  //     },
  //   },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__slideInUp animate__delay-0s"
                      : ""
                  }
                > */}
            <h2 className="mb-5">Projects</h2>
            {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p> */}
            {/* </div>
              )}
            </TrackVisibility> */}

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">UI/UX</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Explorers</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsWeb.map((projectWeb, index) => {
                      return <ProjectCard key={index} {...projectWeb} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsUIUX.map((projectUIUX, index) => {
                      return <ProjectCard key={index} {...projectUIUX} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsExlporers.map((projectsExlporers, index) => {
                      return <ProjectCard key={index} {...projectsExlporers} />;
                    })}
                  </Row>
                </Tab.Pane>

                {/* <Tab.Pane eventKey="third">
                  <Row>
                    {projectsDesign.map((projectsDesign, index) => {
                      return <ProjectCard key={index} {...projectsDesign} />;
                    })}
                  </Row>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt="background"
        className="background-image-right"
      />
    </section>
  );
}
