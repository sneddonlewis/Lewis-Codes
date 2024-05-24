import React from 'react';
import Icons from "../social/Icons";
import Skills from '../skills/Skills';
import { NavLink } from 'react-router-dom';

function About() {
	return (
		<div>
			<div>Lewis Sneddon</div>
			<div>
				Fullstack Developer
			</div>
			<Icons />
			<div>
				<div>
					<small>see some example projects <NavLink to="/projects">here</NavLink></small>
				</div>
			</div>
			<Skills/>
		</div>
	);
}

export default About;
