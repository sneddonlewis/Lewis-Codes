import { useState } from 'react';
import { MessagePostRequest, MessageResponse } from '../types';

const apiUrl = 'https://24frvheey0.execute-api.eu-west-2.amazonaws.com/prod/message'

export const usePostMessage = () => {

  const [serverResponse, setServerResponse] = useState<MessageResponse | undefined>(undefined)
  const [loading, setLoading] = useState(false)


  const postMessage = (request: MessagePostRequest): void => {
    setLoading(true)
    fetch(apiUrl, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request),
    })
      .then(response => response.json())
      .then(body => setServerResponse(body))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  return { loading, serverResponse, postMessage }
}
