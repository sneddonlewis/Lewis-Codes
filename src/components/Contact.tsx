import React, { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"

type FormErrors = {
  email?: string,
  msg?: string,
}

export const Contact: React.FC = () => {
  const [msg, setMsg] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<FormErrors>({ email: undefined, msg: undefined })

  const msgId = 'contactFormMessageId'
  const emailId = 'contactFormEmailId'
  const basicEmailRegex = new RegExp(/\S+@\S+\.\S+/)

  const validate = (emailAddr: string, message: string) => {
    let isValid = true
    setErrors(prevErrors => {
      const errors = prevErrors
      if (!emailAddr) {
        errors.email = 'I need your email address'
        isValid = false
      } else if (!basicEmailRegex.test(email)) {
        errors.email = "That's not a valid email address";
        isValid = false
      } else {
        errors.email = undefined
      }
      if (!message) {
        errors.msg = 'Oops, looks like you forgot to add your message'
        isValid = false
      } else {
        errors.msg = undefined
      }
      return errors
    })
    return isValid
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.id === emailId) {
      setEmail(e.target.value)
      setErrors(prevErrors => ({ ...prevErrors, email: undefined }));
    }
    if (e.target.id === msgId) {
      setMsg(e.target.value)
      setErrors(prevErrors => ({ ...prevErrors, msg: undefined }));
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      const isValid = validate(email, msg)
      if (!isValid) {
        return
      }
      console.log(`Time for a POST request with Email: ${email} & Message: ${msg}`)
    }, 0)
  }


  return (
    <>
      <h1>Contact Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId={emailId}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId={msgId}>
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            value={msg}
            onChange={handleChange}
          />
          {errors.msg && <small className="text-danger">{errors.msg}</small>}
        </Form.Group>

        <Button
          variant="primary" 
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Form>
    </>
  )
}
