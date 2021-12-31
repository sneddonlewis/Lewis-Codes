import { IProject } from "../Typings/IProject";

const webProjects: IProject[] = [
	{
		title: "Code Share",
		description: "A web app for storage and retrieval of code snippets. Includes a REST API and React web view",
		codeUrl: "https://github.com/codeslewis/Code_Share_React",
		launchable: true,
		launchUrl: "https://youtu.be/EY8chA5bSfc",
		techStack: ["java", "spring", "react"],
	},
	{
		title: "Recipe Service",
		description: "Spring REST api for storage and retrieval of recipes. Recipes are uploaded and modified by authenticated users yet searchable publicly",
		codeUrl: "https://github.com/codeslewis/Recipe_Service/tree/master/Recipes/task",
		launchable: false,
		launchUrl: "",
		techStack: ["java", "spring"],
	},
	{
		title: "Cinema Booking API",
		description: "A RESTful web API that handles the booking and returning of theatre seats.",
		codeUrl: "https://github.com/codeslewis/Cinema_API",
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
		description: "This site. A React SPA",
		codeUrl: "https://github.com/codeslewis/Lewis-Codes",
		launchable: false,
		launchUrl: "",
		techStack: ["react", "ts", "node"],
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
		title: "JSON Database",
		description: "A multithreaded document database that stores data in a json file. Includes a command line client",
		codeUrl:
			"https://github.com/codeslewis/Json_Database/tree/master/JSON%20Database/task/src",
		launchable: false,
		launchUrl: "",
		techStack: ["java"],
	},
	{
		title: "Banking System",
		description: "Using the JDBC API, this project: persists user bank accounts and handles transfers between accounts in a transactional manner.",
		codeUrl:
			"https://github.com/codeslewis/Banking_System/tree/master/Simple%20Banking%20System/task/src/banking",
		launchable: false,
		launchUrl: "",
		techStack: ["java"],
	},
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
		title: "Matrix Calculator",
		description: "Performs math operations on numeric matrices",
		codeUrl:
			"https://github.com/codeslewis/Matrix_Calculator",
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
    webProjects,
    mobileProjects,
    desktopProjects
};