import React, { useState } from 'react';

import { Nav, NavItem, NavLink, TabContent, TabPane, Container } from "reactstrap";
import classnames from 'classnames';
import Project from "./Project";

import {
	mobileProjects,
	desktopProjects,
	fullStackProjects,
	webApiProjects,
	frontendProjects
} from "../../data/ProjectsData";

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
						Desktop <span className="badge rounded-pill bg-success ms-3">{desktopProjects.length}</span>
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

				<TabPane tabId="1">
					<div className="row align-content-center">
						{fullStackProjects.map((i) => {
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
				</TabPane>

				<TabPane tabId="2">
					<div className="row">
						{webApiProjects.map((i) => {
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
				</TabPane>

				<TabPane tabId="3">
					<div className="row">
						{frontendProjects.map((i) => {
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
				</TabPane>

				<TabPane tabId="4">
					<div className="row">
						{desktopProjects.map((i) => {
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
				</TabPane>

				<TabPane tabId="5">
					<div className="row">
						{mobileProjects.map((i) => {
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
				</TabPane>

			</TabContent>
		</Container>
	);
}

export default Projects;
