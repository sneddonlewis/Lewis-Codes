import React, {ReactNode, useState} from 'react';
import {Envelope} from "react-bootstrap-icons";
import Icons from "../social/Icons";
import List from "reactstrap/es/List";
import {Button} from "reactstrap";
import SendEmail from "../../modal/SendEmail";

function About(): ReactNode {
	const [showModal, setShowModal] = useState(false );

	function toggleModal() {
		setShowModal(!showModal );
	}
	return (
		<div className="m-5">
			<h1>Lewis Sneddon</h1>
			<div className="subheading mb-5">
				Software Developer ·
				<Button
					onClick={toggleModal}

				><Envelope /></Button>
				<SendEmail showModal={showModal} toggleModal={toggleModal}/>
			</div>
			<Icons />
			<List type="unstyled" className="m-5">
				<li>Object Oriented design Principles and Patterns</li>
				<li>Developing and consuming RESTful web APIs</li>
				<li>User Interface programming for desktopm web and mobile</li>
				<li>Interacting with structured and semi-structured data</li>
				<li>Scripting, version control and cloud</li>
			</List>
		</div>
	);
}

export default About;
