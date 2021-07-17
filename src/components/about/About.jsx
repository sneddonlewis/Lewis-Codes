import React from 'react';
import {Envelope} from "react-bootstrap-icons";

function About() {
	return (
		<div className="resume-section-content">
			<h1 className="mb-0">Lewis Sneddon</h1>
			<div className="subheading mb-5">
				Software Developer ·
				<a href="mailto:lewis@lewiscodes.io"><Envelope /></a>
			</div>
			<p className="lead mb-5">
				A tech enthusiast looking for my first software development job.
			</p>
			{/*<SocialIcons />*/}
		</div>
	);
}

export default About;
