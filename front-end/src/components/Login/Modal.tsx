import React from "react";
import Input from "./Input";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <Container fluid style={{ height: "100%" }}>
      <Row className={styles.row}>
        <Col className={styles.modal} xs={6}>
          <div className={styles.modalBackground}>
            <Input label="E-Mail" controlType="email" />
            <Input label="Password" controlType="password" />
            <Button variant="primary">Login</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Modal;
