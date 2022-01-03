import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Buttons from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Login.css'
import logo from './img/1.png';
import bg1 from './img/e6.jpg';

import { ButtonBase, tableBodyClasses } from "@mui/material";
export default function Signup() {
  const emailRef = useRef()
  const nameRef= useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)

          history.push("/")
    } catch {
      setError("Failed to create an account")
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
  <div class="centered">

      <Card>
  
        <Card.Body><img src={logo} className="lo"/>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email or ID" ref={emailRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"placeholder="Password" ref={passwordRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4"/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordConfirmRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4" />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>name</Form.Label>
              <Form.Control type="name" placeholder="name" ref={nameRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4" />
            </Form.Group>
           
            <br></br>
            <Buttons disabled={loading}  color="info" variant="contained"endIcon={<SendIcon />} type="submit">
              Sign Up
            </Buttons>

          </Form>
          <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>

        </Card.Body>
      </Card>
    </div>
    </div>
    
</div>
  )
}
