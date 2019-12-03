import React from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
// import { Button } from "../utils/styledComponents.js";

import styled from "styled-components";
import Medical from "../../images/Med-Child.png";
import Family from "../../images/family.png";

const NewCard = styled(Card)`
  padding-bottom: 25px;
  padding-right: 10px;
  // padding-top: -10px;
  margin-bottom: 5%;
  // border-radius: 10px;
  // box-shadow: 0px 5px 10px lightgrey;
`;

const HowCard = styled(Card)`
  max-width: 50%;
  background: #32ddaa;
  color: white;
  margin-left: 333px;
  font-size: 40px;
  padding: 10px;
  line-height: 50px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 10px lightgrey;
  border-radius: 10px;
`;

const BottomCards = styled(Card)`
  background: #32ddaa;
  color: white;
  padding: 20px;
  font-size: 30px;
  box-shadow: 0px 5px 10px lightgrey;
  border-radius: 10px;
  margin-top: 25px;
`;
// const NewCol = styled(Col)`
//   background: #eeeded;
// `;

const H1 = styled.h1`
  padding-top: 25px;
  font-size: 40px;
  color: #877878;
`;

const NewParagraph = styled.p`
  font-size: 20px;
  // font-weight: bold;
  color: #777777;
  padding-top: 45px;

  padding-right: 93px;

  padding-left: 55px;
  text-align: left;
`;

const Button = styled.button`
  background: #ff9d65;
  color: #ffffff;
  &:hover {
    background: #ffb286;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  border-radius: 4px;
  border: none;
  margin: auto 15px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
  box-shadow: 0px 5px 10px lightgrey;
`;

function LandingPage() {
  return (
    <>
      <Container>
        {/* <div className="header"> */}
        <HowCard>
          <CardTitle>
            {" "}
            <i class="fas fa-syringe"></i>
          </CardTitle>
          <CardBody>
            You childs Immuniziation records easily accessable on your mobile
            phone.
          </CardBody>
        </HowCard>
        {/* <i class="fas fa-syringe"></i> */}

        {/* <p>
           
          </p> */}
        {/* </div> */}

        <NewCard>
          <CardTitle>
            <H1 className="patient">Parents</H1>
          </CardTitle>
          <CardBody>
            <Row>
              <Col lg="6">
                <img src={Family} alt="Mom and Child" />
              </Col>
              <Col lg="6">
                <NewParagraph className="card-text">
                  As a parent, it's hard to keep track of your child's
                  immunization records! Especially if you move states, or switch
                  doctors.{" "}
                </NewParagraph>
                <NewParagraph className="card-text">
                  Need your childs immunization records for school, travel?
                </NewParagraph>{" "}
                <NewParagraph className="card-text">
                  <span className="i">I</span>
                  <span className="m">M</span> Records allows medical
                  professionals to upload immunization records to your personal
                  or family account.
                </NewParagraph>
                <Link to="/patient">
                  <Button>Sign up!</Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </NewCard>
      </Container>

      <Container>
        <NewCard>
          <CardTitle>
            {" "}
            <H1 className="id">Peace of mind for your patients.</H1>
          </CardTitle>
          <CardBody>
            <Row>
              <Col lg="6">
                <NewParagraph className="card-text">
                  <i class="fas fa-check-square"></i> Give your patients peace
                  of mind, allowing easy access to their childs vaccination
                  records.
                </NewParagraph>
                <NewParagraph className="card-text">
                  <i class="fas fa-check-square"></i> Quick and Easy sign up
                  process.
                </NewParagraph>
                <NewParagraph className="card-text">
                  <i class="fas fa-check-square"></i> Safe, Secure and HIPPA
                  compliant.
                </NewParagraph>
                <Link to="/med">
                  <Button>Sign Up</Button>
                </Link>{" "}
              </Col>
              <Col lg="6">
                <img src={Medical} alt="" />
              </Col>
            </Row>
          </CardBody>
        </NewCard>
      </Container>
      <Container>
        <Row>
          <Col lg="12">
            <H1>How it Works!</H1>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <BottomCards>
              <CardTitle>
                <i class="fas fa-user-friends"></i>
              </CardTitle>
              <CardBody>
                <p>Nulla ad ex do incididunt dolore.</p>
                <p>Irure et aute excepteur culpa eiusmod.</p>
                <p>Ipsum eiusmod ipsum quis.</p>
              </CardBody>
            </BottomCards>
          </Col>
          <Col lg="4">
            <BottomCards>
              <CardTitle>
                <i class="fas fa-user-md"></i>
              </CardTitle>
              <CardBody>
                <p>Nulla ad ex do incididunt dolore.</p>
                <p>Irure et aute excepteur culpa eiusmod.</p>
                <p>Ipsum eiusmod ipsum quis.</p>
              </CardBody>
            </BottomCards>
          </Col>
          <Col lg="4">
            <BottomCards>
              <CardTitle>
                <i class="fas fa-mobile-alt"></i>
              </CardTitle>
              <CardBody>
                <p>Nulla ad ex do incididunt dolore.</p>
                <p>Irure et aute excepteur culpa eiusmod.</p>
                <p>Ipsum eiusmod ipsum quis.</p>
              </CardBody>
            </BottomCards>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;

// <i class="fas fa-user-md"></i>  Dr Icon
// <i class="fas fa-user-friends"></i>  parent/child
// <i class="fas fa-check-square"></i>  checkmark
// <i class="fas fa-mobile-alt"></i>  mobile phone
// <i class="fas fa-desktop"></i>  desktop

{
  /* <Link to="/patient">
            <ButtonPatient>Patient</ButtonPatient>
          </Link>
          <Link to="/med">
            <Button>Provider</Button>
          </Link> */
}
