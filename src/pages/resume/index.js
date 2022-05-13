import React from "react";
import "../resume/style.css";
import { Container, Row, Image } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import HamburgerMenu from "../../components/hamburger_menu";
import resume from "../../../src/assets/resume.png";
import { Helmet } from "react-helmet";
import particles from "../../const/contact_particle.js";
import Particles from "react-particles-js";
import CV from "../../components/cv";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Motasim Foad</title>
          <link rel="canonical" href="http://motasimfoad.com/contact" />
          <meta
            name="description"
            content="Motasim Foad | Contact - Product Manager | Project Manager | Software Engineer"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="resume-box">
              <CV />
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>
      </div>
    );
  }
}
export default Resume;
