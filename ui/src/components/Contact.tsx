import React, { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Loading } from "./Loading"
import { MessagePostRequest } from "../types"
import { usePostMessage } from "../hooks/usePostMessage"

export const Contact: React.FC = () => {
  const { loading, serverResponse, postMessage } = usePostMessage()

  const [msg, setMsg] = useState('')
  const [email, setEmail] = useState('')

  const [emailError, setEmailError] = useState<string | undefined>(undefined)
  const [msgError, setMsgError] = useState<string | undefined>(undefined)

  const msgId = 'contactFormMessageId'
  const emailId = 'contactFormEmailId'
  const basicEmailRegex = new RegExp(/\S+@\S+\.\S+/)

  const buttonContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
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
    const postRequest: MessagePostRequest = {
      email: email!,
      message: msg!,
    }

    postMessage(postRequest)
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

        <div style={buttonContainer}>
          <Button
            variant="primary" 
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
        {serverResponse && 
          <div>
            <small className="text-success">{JSON.stringify(serverResponse)}</small>
          </div>
        }
      </Form>
    </>
  )
}
