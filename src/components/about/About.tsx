import React, {useState} from 'react';
import {Envelope} from "react-bootstrap-icons";
import Icons from "../social/Icons";
import List from "reactstrap/es/List";
import ModalContainer from "../../modal/ModalContainer";
import {Button, Modal, ModalBody} from "reactstrap";

function About() {
	const [state, setState] = useState({ showModal: false });

	function toggleModal() {
		console.log("toggle modal called");
		setState({ showModal: !state.showModal });
		console.log(state);
	}
	return (
		<div className="m-5">
			<h1>Lewis Sneddon</h1>
			<div className="subheading mb-5">
				Software Developer ·
				<Button
					onClick={toggleModal}

				><Envelope /></Button>
				{
					state.showModal ? (
						<ModalContainer>
							<div>
								<div className="m-4">
									Send an email with your default Mail app to lewis@lewiscodes.io ?
								</div>
								<div className="text-end">
									<Button
										className="m-2"
										outline
										size="sm"
										color="warning"
										onClick={toggleModal}
									>Cancel</Button>
									<Button
										className="m-2"
										outline
										size="sm"
										color="primary"
										href="mailto:lewis@lewiscodes.io"
									>Ok</Button>
								</div>
							</div>
						</ModalContainer>
					) : null
				}
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
