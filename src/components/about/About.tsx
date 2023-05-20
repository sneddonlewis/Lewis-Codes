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
				Software Developer · &nbsp;
				<div className="wrapper">
				<span
					className="icon email"
					onClick={toggleModal}
					style={{ cursor: "pointer" }}
				>
					<div className="tooltip">Email me</div>
					<Envelope/>
				</span>
				<SendEmail showModal={showModal} toggleModal={toggleModal}/>
				</div>
			</div>
			<Icons />
			<div className="m-5">
				<p>Polyglot programmer comfortable in many programming languages.</p>
				<p>Self taught and a quick learner.</p>
				<p>Full stack web developer.</p>
				<p>Experienced in querying Relational, Document and Graph Databases.</p>
				<p>Well versed in Algorithms, Data Structures and Design Patterns.</p>
				<p>Writes clean maintainable tested code within Object Oriented and Functional paradigms.</p>
				<a target="_blank" rel="noreferrer" href="https://app.pluralsight.com/profile/lewis-sneddon">
				<Button
					className="ms-1"
					outline
					color="dark"
					size="sm"
					style={{ margin: "1em", }}
				>Verified skills from Pluralsight</Button></a>
				<a target="_blank" rel="noreferrer" href="https://frontendmasters.com/u/lsneddon/">
				<Button
					className="ms-1"
					outline
					color="dark"
					size="sm"
					style={{ margin: "1em", }}
				>Learning record from Frontend Masters</Button></a>
			</div>
		</div>
	);
}

export default About;
