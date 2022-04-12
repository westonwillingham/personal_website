import React from "react";
import "../home_right/style.css";
import Foad from "../../assets/img/weston_headshot.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <Row className="home-right-footer">
            <div className="lets-connect">Let's Connect!</div>
            <SocialIcons />
          </Row>
          <Image
            src={Foad}
            className="home-right-main-img"
            alt="Image of Weston Willingham"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Right;
