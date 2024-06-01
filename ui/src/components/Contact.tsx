import React, { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Loading } from "./Loading"

type MessagePostRequest = {
  email: string,
  message: string
}

type MessageResponse = {
  message_status: string,
  message_body: MessagePostRequest,
}

export const Contact: React.FC = () => {

  const [serverResponse, setServerResponse] = useState<MessageResponse | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const [msg, setMsg] = useState('')
  const [email, setEmail] = useState('')

  const [emailError, setEmailError] = useState<string | undefined>(undefined)
  const [msgError, setMsgError] = useState<string | undefined>(undefined)

  const msgId = 'contactFormMessageId'
  const emailId = 'contactFormEmailId'
  const basicEmailRegex = new RegExp(/\S+@\S+\.\S+/)

  const postMessage = (request: MessagePostRequest) => {
    setLoading(true)
    const apiUrl = 'https://24frvheey0.execute-api.eu-west-2.amazonaws.com/prod/message'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.id === emailId) {
      setEmail(e.target.value)
    }
    if (e.target.id === msgId) {
      setMsg(e.target.value)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    let valid = true

    if (!email) {
      setEmailError('I need your email address')
      valid = false
    } else if (!basicEmailRegex.test(email)) {
      setEmailError("That's not a valid email address")
      valid = false
    } else {
      setEmailError(undefined)
    }
    if (!msg) {
      setMsgError('Oops, looks like you forgot to add your message')
      valid = false
    } else {
      setMsgError(undefined)
    }
    if (!valid) {
      return
    }

    postMessage({
      email: email,
      message: msg,
    })
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  if (serverResponse) {
    return (
      <>
        <h1>Thanks, I've got your message</h1>
        <div>
          <small className="text-info">{JSON.stringify(serverResponse)}</small>
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Send me a message</h1>
      <Form>
        <Form.Group className="mb-3" controlId={emailId}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          {emailError && <small className="text-danger">{emailError}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId={msgId}>
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            value={msg}
            onChange={handleChange}
          />
          {msgError && <small className="text-danger">{msgError}</small>}
        </Form.Group>

        <Button
          variant="primary" 
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
        {serverResponse && 
          <div>
            <small className="text-success">{JSON.stringify(serverResponse)}</small>
          </div>
        }
      </Form>
    </>
  )
}
