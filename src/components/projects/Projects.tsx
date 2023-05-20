import React from 'react';

import {
	javaProjects, goProjects, typeScriptProjects, kotlinProjects, rustProjects,
} from "../../data/ProjectsData";
import Project from './Project';
import { SortSelector } from './SortSelector';

function Projects() {
	const allProjects = [...javaProjects, ...goProjects, ...rustProjects, ...typeScriptProjects, ...kotlinProjects];
	const allTech = Array.from(new Set(allProjects.map(proj => proj.techStack).flat(2)));
	console.log(allTech);	
	const actionsTechSelect = (tech: string) => {
		console.log(`Selected ${tech}`);
	};
	return (
		<>
			<h1 style={{ margin: "1em", }}>Projects</h1>
			<SortSelector techs={allTech} actionsOn={actionsTechSelect}></SortSelector>
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
