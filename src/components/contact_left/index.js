import React from "react";
import "../contact_left/style.css";
import { Row, Col } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Contact_Left() {
  return (
    <div>
      <Row className="Contact-text">
        <Col xl={12}>
          <h1 className="p-heading1">Get In Touch</h1>
          <p className="p-heading2">
            Let's be <strong>friends!</strong>
            <br />
            Check out my YouTube channel, follow me on Twitter, connect with me
            on LinkedIn, and browse through my GitHub! Please send me a DM so I
            know to follow you back.
          </p>
        </Col>
      </Row>

      <Row className="contact-left-footer">
        <SocialIcons />
      </Row>
    </div>
  );
}

export default Contact_Left;
