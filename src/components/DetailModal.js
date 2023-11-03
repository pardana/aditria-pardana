import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";

export default function DetailModal(props) {
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: 1050, position: "fixed" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            {props.names?.map((name, index) => {
              return <img src={name} key={index} alt={name} />;
            })}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
