import React, {useState} from 'react';
import {Envelope} from "react-bootstrap-icons";
import Icons from "../social/Icons";
import {Button} from "reactstrap";
import SendEmail from "../../modal/SendEmail";

function About() {
	const [showModal, setShowModal] = useState(false );

	function toggleModal() {
		setShowModal(!showModal );
	}
	return (
		<div className="m-5">
			<div className="h1">Lewis Sneddon</div>
			<div className="subheading mb-5">
				Software Developer ·
				<Button
					onClick={toggleModal}

				><Envelope /></Button>
				<SendEmail showModal={showModal} toggleModal={toggleModal}/>
			</div>
			<Icons />
			<div className="m-5">
				<p>Object Oriented design Principles and Patterns</p>
				<p>Developing and consuming RESTful web APIs</p>
				<p>User Interface programming for desktop, web and mobile</p>
				<p>Interacting with structured and semi-structured data</p>
				<p>Scripting, version control and cloud</p>
				<a target="_blank" rel="noreferrer" href="https://app.pluralsight.com/profile/lewis-sneddon">
				<Button
					className="ms-1"
					outline
					color="dark"
					size="sm"
				>Verified skills from Pluralsight</Button></a>
				<a target="_blank" rel="noreferrer" href="https://frontendmasters.com/u/lsneddon/">
				<Button
					className="ms-1"
					outline
					color="dark"
					size="sm"
				>Learning record from Frontend Masters</Button></a>
			</div>
		</div>
	);
}

export default About;
