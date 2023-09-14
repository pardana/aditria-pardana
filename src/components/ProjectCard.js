import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import DetailModal from "./DetailModal";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  tech,
  imgDetails,
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col sm={12} md={6} xl={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={description} />
        <div className="proj-txtx">
          <h4 className="px-2">{title}</h4>
          <span>{description}</span>
          <p style={{ fontSize: "15px" }}>Tech: {tech}</p>

          <Button variant="light" onClick={() => setModalShow(true)}>
            View
          </Button>

          <DetailModal
            {...imgDetails}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </Col>
  );
}
