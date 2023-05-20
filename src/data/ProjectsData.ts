import {IProject} from "../Typings/IProject";

const javaProjects: IProject[] = [
    {
        title: "JSON Database",
        description: "Multi-threaded database to store and retrieve JSON data. Includes a CLI client that can connect via TCP.",
        codeUrl:
            "https://github.com/sneddonlewis/Json_Database/tree/master/JSON%20Database/task/src",
        launchable: false,
        launchUrl: "",
        techStack: ["java"],
    },
    {
        title: "Noughts and Crosses",
        description: `Java Desktop Noughts and Crosses game using the swing library for GUI`,
        codeUrl:
            "https://github.com/sneddonlewis/DesktopNoughtsAndCrosses",
        launchable: true,
        launchUrl: "https://youtu.be/1PjB4aNRjBU",
        techStack: ["java"],
    },
];

const goProjects: IProject[] = [
    {
        title: "Flashcards",
        description: "CLI learning aid to test the user with flashcard type questions and answers that can be inputted interactively or loaded from a file",
        codeUrl:
            "https://github.com/sneddonlewis/Flashcards_go/blob/master/Flashcards/task/main.go",
        launchable: false,
        launchUrl: "",
        techStack: ["go"],
    },
    {
        title: "Notepad",
        description: "An in memory CLI app providing basic CRUD functionality for notes",
        codeUrl:
            "https://github.com/sneddonlewis/notepad",
        launchable: false,
        launchUrl: "",
        techStack: ["go"],
    },
];

const typeScriptProjects: IProject[] = [
    {
        title: "Lewis Codes",
        description: "This site. A React SPA",
        codeUrl: "https://github.com/sneddonlewis/Lewis-Codes",
        launchable: false,
        launchUrl: "",
        techStack: ["react", "ts", "aws"],
    },
];

const kotlinProjects: IProject[] = [
    {
        title: "Minesweeper",
        description: "Command Line Minesweeper game",
        codeUrl:
            "https://github.com/sneddonlewis/Minesweeper/tree/master/Minesweeper/task/src/minesweeper",
        launchable: false,
        launchUrl: "",
        techStack: ["kotlin"],
    },
];

const rustProjects: IProject[] = [
    {
        title: "Duper",
        description: "CLI App to find duplicate files",
        codeUrl: "https://github.com/sneddonlewis/duper_cli",
        launchable: false,
        launchUrl: "",
        techStack: ["rust"],
    },
];

export {
    javaProjects,
    goProjects,
    typeScriptProjects,
    kotlinProjects,
    rustProjects,
};
