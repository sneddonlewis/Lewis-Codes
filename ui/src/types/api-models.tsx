

export type MessagePostRequest = {
  email: string,
  message: string
}

export type MessageResponse = {
  message_status: string,
  message_body: MessagePostRequest,
}
