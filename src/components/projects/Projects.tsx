import React, { useState } from 'react';

import {Nav, NavItem, NavLink, Container, TabContent} from "reactstrap";
import classnames from 'classnames';

import {
	javaProjects, goProjects, typeScriptProjects, kotlinProjects, rustProjects,
} from "../../data/ProjectsData";
import ProjectTabContents from "./ProjectTabContents";

function Projects() {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab: string) => {
		if(activeTab !== tab) setActiveTab(tab);
	}
	return (
		<Container>
			<h1 style={{ margin: "1em", }}>Projects</h1>
			<Nav tabs className="nav-fill">

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('1'); }}
					>
						Java <span className="badge rounded-pill bg-success ms-3">{javaProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('2'); }}
					>
						Go <span className="badge rounded-pill bg-success ms-3">{goProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('3'); }}
					>
						Rust <span className="badge rounded-pill bg-success ms-3">{rustProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '4' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('4'); }}
					>
						TypeScript <span className="badge rounded-pill bg-success ms-3">{typeScriptProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '5' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('5'); }}
					>
						Kotlin <span className="badge rounded-pill bg-success ms-3">{kotlinProjects.length}</span>
					</NavLink>
				</NavItem>
			</Nav>

			<TabContent activeTab={activeTab}>
				<ProjectTabContents projects={javaProjects} tabId={"1"} />
				<ProjectTabContents projects={goProjects} tabId={"2"} />
				<ProjectTabContents projects={rustProjects} tabId={"3"} />
				<ProjectTabContents projects={typeScriptProjects} tabId={"4"} />
				<ProjectTabContents projects={kotlinProjects} tabId={"5"} />
			</TabContent>
		</Container>
	);
}

export default Projects;
