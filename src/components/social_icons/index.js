import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href="https://github.com/westonwillingham"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/wagmiweston"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="twitter" icon={faTwitter} />
      </a>
      <a
        href="https://www.instagram.com/westonwillingham/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="insta" icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/in/westonwillingham"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCUDtubmfoEA022unegzarpw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="youtube" icon={faYoutube} />
      </a>
    </Col>
  );
}

export default SocialIcons;
