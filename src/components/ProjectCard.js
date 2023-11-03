import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import DetailModal from "./DetailModal";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  tech,
  imgDetails,
  linkUrl,
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col sm={12} md={6} xl={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={description} />
        <div className="proj-txtx">
          <h4 className="px-2">{title}</h4>
          <span className="px-2">{description}</span>
          <p style={{ fontSize: "15px" }}>Tech: {tech}</p>

          <Button
            variant="light"
            onClick={() => setModalShow(true)}
            className="mx-2"
          >
            View
          </Button>

          <a href={linkUrl} target="_blank" rel="noreferrer">
            <Button variant="dark" className="">
              Link
            </Button>
          </a>

          <DetailModal
            {...imgDetails}
            show={modalShow}
            onHide={() => setModalShow(false)}
            className="z-999"
          />
        </div>
      </div>
    </Col>
  );
}
