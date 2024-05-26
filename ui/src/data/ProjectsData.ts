import { ProjectDetail } from "../types/ProjectTypes";

export const projects: Array<ProjectDetail> = [
    {
        title: "Battleships",
        description: "CLI Battleships Game",
        codeUrl: "https://github.com/sneddonlewis/battleships-rs",
        launchUrl: undefined,
        techStack: ["rust"],
    },
    {
        title: "Duper",
        description: "CLI App to find duplicate files",
        codeUrl: "https://github.com/sneddonlewis/duper_cli",
        launchUrl: undefined,
        techStack: ["rust"],
    },
    {
        title: "JSON Database",
        description: "Multi-threaded database to store and retrieve JSON data. Includes a CLI client that can connect via TCP.",
        codeUrl:
            "https://github.com/sneddonlewis/Json_Database/tree/master/JSON%20Database/task/src",
        launchUrl: undefined,
        techStack: ["java"],
    },
    {
        title: "Noughts and Crosses",
        description: `Java Desktop Noughts and Crosses game using the swing library for GUI`,
        codeUrl:
            "https://github.com/sneddonlewis/DesktopNoughtsAndCrosses",
        launchUrl: "https://youtu.be/1PjB4aNRjBU",
        techStack: ["java"],
    },
    {
        title: "Matrix Calculator",
        description: "Basic math operations on numerical matrices. Includes addition, multiplication and transposition",
        codeUrl: "https://github.com/sneddonlewis/Matrix_Calculator",
        launchUrl: undefined,
        techStack: ["java"],
    },
    {
        title: "Notepad",
        description: "An in memory CLI app providing basic CRUD functionality for notes",
        codeUrl: "https://github.com/sneddonlewis/notepad",
        launchUrl: undefined,
        techStack: ["go"],
    },
    {
        title: "Cinema API",
        description: "Web API for a cinema seat booking system",
        codeUrl: "https://github.com/sneddonlewis/Cinema_API",
        launchUrl: undefined,
        techStack: ["java", "spring"],
    },
    {
        title: "Code Share",
        description: "Web app for sharing solutions to coding problems",
        codeUrl: "https://github.com/sneddonlewis/Code_Share_React",
        launchUrl: undefined,
        techStack: ["java", "spring", "react"],
    },
    {
        title: "Lewis Codes",
        description: "This site.",
        codeUrl: "https://github.com/sneddonlewis/Lewis-Codes",
        launchUrl: undefined,
        techStack: ["react", "ts", "go", "aws"],
    },
];
