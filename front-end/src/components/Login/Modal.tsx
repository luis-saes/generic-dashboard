import React from "react";
import { Link } from "react-router-dom";
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
        <Col className={styles.modal} xs={4}>
          <div className={`${styles.modalBackground} px-5 py-5`}>
            <div className={styles.title}>Login</div>
            <Input className="mt-3" label="E-Mail" controlType="email" />
            <Input className="mt-3" label="Password" controlType="password" />
            <Link to="/">
              <Button className={`${styles.button} mt-4`} variant="primary">
                Login
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Modal;
