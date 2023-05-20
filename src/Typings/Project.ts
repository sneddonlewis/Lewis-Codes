export type Project = LaunchableProject

// TODO make an unlaunchable project that has launchable false and launchUrl must be undefined
export type LaunchableProject = {
	title: string;
	techStack: string[];
	description: string;
	launchable: boolean;
	launchUrl?: string;
	codeUrl: string;
}

export type ProjectProps = Project
