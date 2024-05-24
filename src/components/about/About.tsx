import React from 'react';
import Icons from "../social/Icons";
import Skills from '../skills/Skills';
import { NavLink } from 'react-router-dom';

function About() {
	return (
		<div className="m-5">
			<div className="h1">Lewis Sneddon</div>
			<div className="subheading mb-5">
				Fullstack Developer
			</div>
			<Icons />
			<div className="d-flex justify-content-around" style={{ marginTop: "2rem" }}>
				<div style={{ maxWidth: "50vw" }}>
					<small>see some example projects <NavLink to="/projects">here</NavLink></small>
				</div>
			</div>
			<Skills/>
		</div>
	);
}

export default About;
