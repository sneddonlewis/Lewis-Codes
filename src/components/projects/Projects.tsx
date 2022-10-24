import React, { useState } from 'react';

import {Nav, NavItem, NavLink, Container, TabContent} from "reactstrap";
import classnames from 'classnames';

import {
	mobileProjects,
	desktopProjects,
	fullStackProjects,
	webApiProjects,
	frontendProjects
} from "../../data/ProjectsData";
import ProjectTabContents from "./ProjectTabContents";

function Projects() {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab: string) => {
		if(activeTab !== tab) setActiveTab(tab);
	}
	return (
		<Container>
			<h1 className="alert alert-primary">Projects</h1>
			<Nav tabs className="nav-fill">

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('1'); }}
					>
						Full Stack <span className="badge rounded-pill bg-success ms-3">{fullStackProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('2'); }}
					>
						Web API <span className="badge rounded-pill bg-success ms-3">{webApiProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '3' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('3'); }}
					>
						Frontend <span className="badge rounded-pill bg-success ms-3">{frontendProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '4' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('4'); }}
					>
						CLI<span className="badge rounded-pill bg-success ms-3">{desktopProjects.length}</span>
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '5' })}
						style={{cursor: "pointer"}}
						onClick={() => { toggle('5'); }}
					>
						Mobile <span className="badge rounded-pill bg-success ms-3">{mobileProjects.length}</span>
					</NavLink>
				</NavItem>
			</Nav>

			<TabContent activeTab={activeTab}>
				<ProjectTabContents projects={fullStackProjects} tabId={"1"} />
				<ProjectTabContents projects={webApiProjects} tabId={"2"} />
				<ProjectTabContents projects={frontendProjects} tabId={"3"} />
				<ProjectTabContents projects={desktopProjects} tabId={"4"} />
				<ProjectTabContents projects={mobileProjects} tabId={"5"} />
			</TabContent>
		</Container>
	);
}

export default Projects;
