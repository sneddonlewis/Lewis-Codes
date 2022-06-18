import { IProject } from "../Typings/IProject";

const fullStackProjects: IProject[] = [
	{
		title: "Code Share",
		description: "A web app for storage and retrieval of code snippets. Includes a REST API and React web view",
		codeUrl: "https://github.com/codeslewis/Code_Share_React",
		launchable: true,
		launchUrl: "https://youtu.be/EY8chA5bSfc",
		techStack: ["java", "spring", "react"],
	},
];

const webApiProjects: IProject[] = [
	{
		title: "Cinema Booking API",
		description: "A RESTful web API that handles the booking and returning of theatre seats.",
		codeUrl: "https://github.com/codeslewis/Cinema_API",
		launchable: false,
		launchUrl: "",
		techStack: ["java", "spring"],
	},
];

const frontendProjects: IProject[] = [
	{
		title: "Lewis Codes",
		description: "This site. A React SPA",
		codeUrl: "https://github.com/codeslewis/Lewis-Codes",
		launchable: false,
		launchUrl: "",
		techStack: ["react", "ts", "node"],
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
		title: "AngularJS Starter Template",
		description: "This repository is provisioned as a template with the intention of assisting a developer in getting setup quickly with AngularJS development. It's intention is to assist developers who are required to work with legacy technologies. The AngularJS app is served as static content from a NodeJS web server.",
		codeUrl: "https://github.com/codeslewis/AngularJS_Template",
		launchable: false,
		launchUrl: "",
		techStack: ["angular", "js", "node"],
	}
];

const mobileProjects: IProject[] = [
	{
		title: "Bake Buddy (Android)",
		description: `A baking ingredient conversion app. This Android app converts Imperial and US Legal baking ingredient measurements into the metric system.`,
		codeUrl:
			"https://github.com/codeslewis/Bake_Buddy_Android/tree/master/app/src",
		launchable: false,
		launchUrl: "",
		techStack: ["android", "java"],
	},
];

const desktopProjects: IProject[] = [
	{
		title: "Text Encryption",
		description: "Encrypt and Decrypt text via files or command line arguments using a shift or a unicode encryption algorithm",
		codeUrl:
			"https://github.com/codeslewis/encryptor",
		launchable: false,
		launchUrl: "",
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
		launchUrl: "",
		techStack: ["kotlin"],
	},
	{
		title: "Battleships",
		description: "A Battleship game for terminal.",
		codeUrl:
			"https://github.com/codeslewis/Battleship/tree/master/Battleship/task/src/battleship",
		launchable: false,
		launchUrl: "",
		techStack: ["java"],
	},
];

export {
	fullStackProjects,
	webApiProjects,
	frontendProjects,
	mobileProjects,
	desktopProjects
};
