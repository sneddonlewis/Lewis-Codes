import React from 'react';
import Icons from "../social/Icons";
import Skills from '../skills/Skills';
import { NavLink } from 'react-router-dom';

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
					<h5>I'm Lewis and I'm a Software developer.</h5>
					<h5>At work I use C# and TypeScript to make web applications leveraging ArangoDB and Azure.</h5>
					<h5>I like to learn new languages and technologies in my spare time and enjoy writing code in Rust.</h5>
					<small>see some example projects <NavLink to="/projects">here</NavLink></small>
				</div>
			</div>
			<Skills/>
		</div>
	);
}

export default About;
