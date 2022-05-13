import React from "react";
import "../home_left/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

function Home_Left() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h2 className="second_line">
            <strong>WESTON WILLINGHAM</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text="Blockchain Engineer  |  Data Scientist ... " //text=["Hello.", "World!"]
              className="typical"
              speed="100"
              eraseDelay="50000"
            />
          </h3>
          <br />
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
              className="home-left-aboutme"
            >
              About Me
            </Link>
          </Button>{" "}
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/resume"
              className="home-left-aboutme"
            >
              Resume
            </Link>
          </Button>
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/connect"
              className="home-left-aboutme"
            >
              Connect
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
