import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col lg="6">
          {/* <p>
            Website created by: Michelle Scott - Eric Wood - Matthew Vaccaro
          </p> */}
        </Col>
        <Col lg="6">
          <p>
            * All information on this site is for educational purposes only.{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Alert color="danger">
            **Important: Do not use any data about real people in this app as it
            could be a violation of HIPAA regulations**
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
