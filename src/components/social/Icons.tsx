import React, { useState } from "react";
import "./Icons.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SendEmail from "../../modal/SendEmail";
import { Envelope } from "react-bootstrap-icons";


const Icons = () => {
	const [showModal, setShowModal] = useState(false);

	function toggleModal() {
		setShowModal(!showModal);
	}
	return (
		<div className="wrapper">
			<a
				className="icon github"
				href="https://github.com/sneddonlewis"
				target="_blank"
				rel="noreferrer"
			>
				<div className="tooltip">Github</div>
				<span>
					<FaGithub />
				</span>
			</a>
			<a
				className="icon linkedin-in"
				href="https://www.linkedin.com/in/lsneddoncodes/"
				target="_blank"
				rel="noreferrer"
			>
				<div className="tooltip">LinkedIn</div>
				<span>
					<FaLinkedin />
				</span>
			</a>
					<span
						className="icon email"
						onClick={toggleModal}
						style={{ cursor: "pointer" }}
					>
						<div className="tooltip">Email me</div>
						<Envelope />
					</span>
					<SendEmail showModal={showModal} toggleModal={toggleModal} />
		</div>
	);
};

export default Icons;
