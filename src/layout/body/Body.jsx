import React, {} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Certifications from "../../components/certifications/Certifications";
import Skills from "../../components/skills/Skills";

function Body() {
	return (
		<>
		<About />
			<BrowserRouter>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/certifications">
					<Certifications />
				</Route>
				<Route path="/skills">
					<Skills />
				</Route>
			</BrowserRouter>
		</>
	);
}

export default Body;
