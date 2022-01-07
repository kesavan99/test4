import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import logo from './img/1.png';
import SendIcon from '@mui/icons-material/Send';

import Buttons from '@mui/material/Button';
import bg1  from './img/e7.jpg'
export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div>
    <div class="split left">
  <div class="centered"> 
  <div class="container">
  <div class="top"><strong><h1>CGI Connect</h1></strong></div>
  <img className="mg" src={bg1} width={770}
  height={  920} />
</div>
</div>
</div>
<div class="split right">
  <div class="centered"></div>
      <Card>
        <Card.Body><img src={logo} className="lo"/>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br></br>
            <Buttons disabled={loading} color="info" variant="contained"endIcon={<SendIcon />} type="submit">
              Reset Password
            </Buttons>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
</div>    
  )
}
