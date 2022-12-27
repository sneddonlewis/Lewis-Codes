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
]

const fullStackProjects: IProject[] = [
    {
        title: "Code Share",
        description: "A web app for storage and retrieval of code snippets. Includes a REST API and React web view",
        codeUrl: "https://github.com/sneddonlewis/Code_Share_React",
        launchable: true,
        launchUrl: "https://youtu.be/EY8chA5bSfc",
        techStack: ["java", "spring", "react"],
    },
];

const webApiProjects: IProject[] = [
    {
        title: "Cinema Booking API",
        description: "A RESTful web API that handles the booking and returning of theatre seats.",
        codeUrl: "https://github.com/sneddonlewis/Cinema_API",
        launchable: false,
        launchUrl: "",
        techStack: ["java", "spring"],
    },
];

const frontendProjects: IProject[] = [
    {
        title: "Lewis Codes",
        description: "This site. A React SPA",
        codeUrl: "https://github.com/sneddonlewis/Lewis-Codes",
        launchable: false,
        launchUrl: "",
        techStack: ["react", "ts", "aws"],
    },
    {
        title: "Bake Buddy",
        description: "A conversion app for common baking ingredients.",
        codeUrl: "https://github.com/sneddonlewis/Baking_Conversions",
        launchable: true,
        launchUrl: "https://bake-buddy.netlify.app/",
        techStack: ["react", "js"],
    }
];

const mobileProjects: IProject[] = [
    {
        title: "Bake Buddy (Android)",
        description: `A baking ingredient conversion app. This Android app converts Imperial and US Legal baking ingredient measurements into the metric system.`,
        codeUrl:
            "https://github.com/sneddonlewis/Bake_Buddy_Android/tree/master/app/src",
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
            "https://github.com/sneddonlewis/encryptor",
        launchable: false,
        launchUrl: "",
        techStack: ["java"],
    },
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
    {
        title: "Minesweeper",
        description: "Command Line Minesweeper game",
        codeUrl:
            "https://github.com/sneddonlewis/Minesweeper/tree/master/Minesweeper/task/src/minesweeper",
        launchable: false,
        launchUrl: "",
        techStack: ["kotlin"],
    },
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

export {
    javaProjects,
    fullStackProjects,
    webApiProjects,
    frontendProjects,
    mobileProjects,
    desktopProjects
};
