import React, { useState } from 'react';

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import Project from "./Project";

function Projects() {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab: string) => {
		if(activeTab !== tab) setActiveTab(tab);
	}
	return (
		<div className="mb-5">
			<h1 className="alert alert-primary">Projects</h1>
			<Nav tabs className="nav-fill">
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => { toggle('1'); }}
					>
						Desktop
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => { toggle('2'); }}
					>
						Web
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '3' })}
						onClick={() => { toggle('3'); }}
					>
						Mobile
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<div className="row align-content-center">
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
				<TabPane tabId="2">
					<div className="row">
						{webProjects.map((i) => {
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
		</div>
	);
}

const webProjects = [
	// {
	// 	title: "Code Bank",
	// 	description: "A Full Stack web app where users can share code snippets to common algorithm problems",
	// 	codeUrl: "https://github.com/codeslewis/code-bank",
	// 	launchable: false,
	// 	launchUrl: "",
	// 	techStack: ["java", "spring", "react", "postgresql"],
	// },
	// {
	// 	title: "Web Quiz App",
	// 	description: "Backed of a Spring Web App to create and solve quizzes.",
	// 	codeUrl: "https://github.com/codeslewis/CodeShare",
	// 	launchable: false,
	// 	launchUrl: "",
	// 	techStack: ["java", "spring"],
	// },
	{
		title: "Bake Buddy",
		description: "A conversion app for common baking ingredients.",
		codeUrl: "https://github.com/codeslewis/Baking_Conversions",
		launchable: true,
		launchUrl: "https://bake-buddy.netlify.app/",
		techStack: ["react", "js"],
	},
	{
		title: "Lewis Codes",
		description: "This site. A React SPA",
		codeUrl: "https://github.com/codeslewis/Lewis-Codes",
		launchable: false,
		launchUrl: "",
		techStack: ["react", "ts", "node"],
	}
];

const mobileProjects = [
	{
		title: "Bake Buddy (Android)",
		description: `A baking ingredient conversion app. This Android app converts Imperial and US Legal baking ingredient measurements into the metric system.`,
		codeUrl:
			"https://github.com/codeslewis/Bake_Buddy_Android/tree/master/app/src",
		launchable: false,
		launchUrl: null,
		techStack: ["android", "java"],
	},
];

const desktopProjects = [
	{
		title: "JSON Database",
		description: "An in-memory database that stores JSON objects. Includes a command line client",
		codeUrl:
			"https://github.com/codeslewis/Json_Database/tree/master/JSON%20Database/task/src",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
	{
		title: "Text Encryption",
		description: "Encrypt and Decrypt text via files or command line arguments using a shift or a unicode encryption algorithm",
		codeUrl:
			"https://github.com/codeslewis/encryptor",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
	{
		title: "Matrix Calculator",
		description: "Performs math operations on numeric matrices",
		codeUrl:
			"https://github.com/codeslewis/Matrix_Calculator",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
	{
		title: "Noughts and Crosses",
		description: `Java Desktop Noughts and Crosses game using the swing library for GUI`,
		codeUrl:
			"https://github.com/codeslewis/DesktopNoughtsAndCrosses",
		launchable: true,
		launchUrl: "https://youtu.be/1PjB4aNRjBU",
		techStack: ["java"],
	},
	{
		title: "Minesweeper",
		description: "Command Line Minesweeper game",
		codeUrl:
			"https://github.com/codeslewis/Minesweeper/tree/master/Minesweeper/task/src/minesweeper",
		launchable: false,
		launchUrl: null,
		techStack: ["kotlin"],
	},
	{
		title: "Battleships",
		description: "A Battleship game for terminal.",
		codeUrl:
			"https://github.com/codeslewis/Battleship/tree/master/Battleship/task/src/battleship",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
];

export default Projects;
