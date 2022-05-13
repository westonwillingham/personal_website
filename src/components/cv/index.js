import React from "react";
import "../cv/style.css";
import { Row } from "react-bootstrap";
import resume from "../../../src/assets/resume.png";

function CV() {
  return (
    <Row>
      <img src={resume} alt="cv" className="resume" />
    </Row>
  );
}

export default CV;
