
export type MessagePostRequest = {
  email: string,
  message: string
}

export type MessageResponse = {
  message_status: string,
  message_body: MessagePostRequest,
}

export type ProjectList = ProjectDetail[]

export type ProjectDetail = {
	title: string;
	techStack: string[];
	description: string;
	launchUrl?: string;
	codeUrl: string;
}
