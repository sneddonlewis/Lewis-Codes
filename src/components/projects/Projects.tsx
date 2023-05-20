import React, { useState } from 'react';

import { Nav, NavItem, NavLink, Container, TabContent } from "reactstrap";
import classnames from 'classnames';

import {
	javaProjects, goProjects, typeScriptProjects, kotlinProjects, rustProjects,
} from "../../data/ProjectsData";
import ProjectTabContents from "./ProjectTabContents";
import Project from './Project';

function Projects() {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab: string) => {
		if (activeTab !== tab) setActiveTab(tab);
	}
	const allProjects = [...javaProjects, ...goProjects, ...rustProjects, ...typeScriptProjects, ...kotlinProjects];
	return (
		<>
			<h1 style={{ margin: "1em", }}>Projects</h1>
			<div className="d-flex justify-content-around flex-wrap">
				{allProjects.map((i) => {
					return (
						<Project
							title={i.title}
							description={i.description}
							codeUrl={i.codeUrl}
							launchUrl={i.launchUrl || ""}
							techStack={i.techStack}
							launchable={i.launchable}
							key={i.title}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Projects;
