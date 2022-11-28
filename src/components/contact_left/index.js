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
						<br />
						Feel free to stalk me using the links below
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
