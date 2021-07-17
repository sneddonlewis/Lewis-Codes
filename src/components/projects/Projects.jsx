import React, { useState } from 'react';

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import Project from "./Project";

function Projects() {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	}
	return (
		<div>
			<h1 className="alert alert-primary">Projects</h1>
			<Nav tabs className="nav-fill">
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => { toggle('1'); }}
					>
						Web
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => { toggle('2'); }}
					>
						Desktop
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '3' })}
						onClick={() => { toggle('3'); }}
					>
						Command Line
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '4' })}
						onClick={() => { toggle('4'); }}
					>
						Mobile
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<div className="row">
						{webProjects.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl}
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
						{desktopProjects.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl}
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
						{terminalProjects.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl}
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
						{mobileProjects.map((i) => {
							return (
								<Project
									title={i.title}
									description={i.description}
									codeUrl={i.codeUrl}
									launchUrl={i.launchUrl}
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
	{
		title: "Code Bank",
		description: "A Full Stack web app where users can share code snippets to common algorithm problems",
		codeUrl: "https://github.com/codeslewis/code-bank",
		launchable: false,
		launchUrl: "",
		techStack: ["java", "spring", "react", "postgresql"],
	},
	{
		title: "Web Quiz App",
		description: "Backed of a Spring Web App to create and solve quizzes.",
		codeUrl: "https://github.com/codeslewis/CodeShare",
		launchable: false,
		launchUrl: "",
		techStack: ["java", "spring"],
	},
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
		description: "A serverless React SPA web app running on aws",
		codeUrl: "https://github.com/codeslewis/Portfolio_Site_React",
		launchable: false,
		launchUrl: "",
		techStack: ["react", "js", "node"],
	},
];

const terminalProjects = [
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
		description: "An interactive game for one or two players",
		codeUrl:
			"https://github.com/codeslewis/Tic-Tac-Toe_with_AI/tree/master/Tic-Tac-Toe%20with%20AI/task/src/tictactoe",
		launchable: false,
		launchUrl: null,
		techStack: ["java"],
	},
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
		title: "Noughts and Crosses",
		description: `Java Desktop Noughts and Crosses game using the swing library for GUI`,
		codeUrl:
			"https://github.com/codeslewis/DesktopNoughtsAndCrosses",
		launchable: true,
		launchUrl: "https://youtu.be/1PjB4aNRjBU",
		techStack: ["java"],
	},
];



export default Projects;
