import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import moment from "moment";
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";

const dateTime = new Date();

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                style={{ color: "white" }}
                href="https://wa.me/6285781476040?text=Hi,%20Aditria%20Pardana%20disini,%20kamu%20mau%20buat%20web%20apa?%20segera%20konsultasikan%20keinginan%20kamu%20ke%20saya!%20Hi,%20saya%20ingin%20membuat%20web..."
                target="_blank"
              >
                <BsWhatsapp />
              </a>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/aditria-pardana-b846a9121/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a
                style={{ color: "white" }}
                href="https://www.instagram.com/appardana/"
                target="_blank"
              >
                <BsInstagram />
              </a>
              <a
                style={{ color: "white", fontSize: 18 }}
                href="https://github.com/pardana"
                target="_blank"
              >
                <DiGithubBadge />
              </a>
            </div>
            <p>
              &copy; {moment(dateTime).format("YYYY")}. All Right Reserved
              Aditria P. Pardana
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
