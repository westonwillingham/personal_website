import React from "react";
import "../home_right/style.css";
import Weston from "../../assets/img/weston_headshot.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />

          <Image
            fluid="true"
            src={Weston}
            className="home-right-main-img"
            alt="Image of Weston Willingham"
          />
        </Col>
        <Row className="home-right-footer">
          <SocialIcons />
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
