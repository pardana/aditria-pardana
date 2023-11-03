import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logoHtml from "../assets/img/logo-html.png";
import logoCss from "../assets/img/logo-css.png";
import logoJavascript from "../assets/img/logo-javascript.png";
import logoTypescript from "../assets/img/logo-typescript.png";
import logoReact from "../assets/img/logo-reactjs.png";
import logoBootstrap from "../assets/img/logo-bootstrap.png";
import logoTailwind from "../assets/img/logo-tailwind.png";
import logoCodeigniter from "../assets/img/logo-codeigniter.png";
import logoGit from "../assets/img/logo-git.png";
import logoMysql from "../assets/img/logo-mysql.png";
import logoFigma from "../assets/img/logo-figma.png";
import logoPhotoshop from "../assets/img/logo-photoshop.png";
import logoImovie from "../assets/img/logo-imovie.png";
import logoWordpress from "../assets/img/logo-wordpress.png";
import logoNextjs from "../assets/img/logo-nextjs.png";
import logoPrisma from "../assets/img/logo-prisma.png";
import logoSupabase from "../assets/img/logo-supabase.png";
import logoPostgresql from "../assets/img/logo-postgresql.png";
import logoVercel from "../assets/img/logo-vercel.png";
import logoNetlify from "../assets/img/logo-netlify.png";

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
                  <img src={logoHtml} alt="logoHtml Aditria Pardana" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={logoCss} alt="logoCss Aditria Pardana" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src={logoJavascript}
                    alt="logoJavascript Aditria Pardana"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src={logoTypescript}
                    alt="logoTypescript Aditria Pardana"
                  />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={logoReact} alt="logoReact Aditria Pardana" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={logoNextjs} alt="logoNext Aditria Pardana" />
                  <h5>Next JS</h5>
                </div>
                <div className="item">
                  <img
                    src={logoBootstrap}
                    alt="logoBootstrap Aditria Pardana"
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={logoTailwind} alt="logoTailwind Aditria Pardana" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img
                    src={logoCodeigniter}
                    alt="logoCodeigniter Aditria Pardana"
                  />
                  <h5>CodeIgniter</h5>
                </div>
                <div className="item">
                  <img src={logoMysql} alt="logoMysql Aditria Pardana" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img
                    src={logoPostgresql}
                    alt="logoPostgresql Aditria Pardana"
                  />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={logoPrisma} alt="logoPrisma Aditria Pardana" />
                  <h5>Prisma</h5>
                </div>
                <div className="item">
                  <img src={logoSupabase} alt="logoSupabase Aditria Pardana" />
                  <h5>Supabase</h5>
                </div>
                <div className="item">
                  <img src={logoGit} alt="logoGit Aditria Pardana" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={logoFigma} alt="logoFigma Aditria Pardana" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img
                    src={logoPhotoshop}
                    alt="logoPhotoshop Aditria Pardana"
                  />
                  <h5>Photoshop</h5>
                </div>
                <div className="item">
                  <img src={logoImovie} alt="logoImovie Aditria Pardana" />
                  <h5>iMovie</h5>
                </div>
                <div className="item">
                  <img
                    src={logoWordpress}
                    alt="logoWordpress Aditria Pardana"
                  />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={logoVercel} alt="logoVercel Aditria Pardana" />
                  <h5>Vercel</h5>
                </div>
                <div className="item">
                  <img src={logoNetlify} alt="logoNetlify Aditria Pardana" />
                  <h5>Netlify</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img
        src={colorSharp}
        className="background-image-left"
        alt="Color Sharp Aditria Pardana"
      />
    </section>
  );
}
