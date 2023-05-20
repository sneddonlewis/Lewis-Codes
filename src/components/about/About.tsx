import React from 'react';
import Icons from "../social/Icons";
import Skills from '../skills/Skills';

function About() {
	return (
		<div className="m-5">
			<div className="h1">Lewis Sneddon</div>
			<div className="subheading mb-5">
				Software Developer
			</div>
			<Icons />
			<div className="d-flex justify-content-around" style={{ marginTop: "2rem" }}>
				<div style={{ maxWidth: "50vw" }}>
					<p>Genuine full stack web developer comfortable in any part of the stack. Self taught and quick to pick up new languagues and frameworks. I write simple, clean, documented and tested code.</p>
				</div>
			</div>
			<Skills/>
		</div>
	);
}

export default About;
