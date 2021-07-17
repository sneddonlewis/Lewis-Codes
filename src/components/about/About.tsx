import React from 'react';
import {Envelope} from "react-bootstrap-icons";
import Icons from "../social/Icons";

function About() {
	return (
		<div className="m-5">
			<h1>Lewis Sneddon</h1>
			<div className="subheading mb-5">
				Software Developer ·
				<a href="mailto:lewis@lewiscodes.io"><Envelope /></a>
			</div>
			<Icons />
		</div>
	);
}

export default About;
