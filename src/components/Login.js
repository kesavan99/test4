import React, { useRef, useState } from "react"
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import ImageList from '@mui/material/ImageList';


import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Paper from '@mui/material/Paper';
import './Login.css'
import Buttons from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from "react-router-dom"
import { containCrop } from "react-image-crop";
import logo from './img/1.png';
import SendIcon from '@mui/icons-material/Send';
import bg1 from './img/e4.jpg';
import bg from './img/bg1.png';


const theme = createTheme();




export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
<div  >
<div class="split left">
  <div class="centered"> 
  <div class="container">
  <div class="top"><strong><h1>CGI Connect</h1></strong></div>
  <img className="mg" src={bg1} />
</div>
</div>
</div>
<div class="split right">
  <div class="centered">
                 <div >

        <div  className='k'  >
          <div >
      <span>  <img src={logo} className="lo"/>
          <h2 className="text-center mb-4">Log In</h2>
          </span></div>{error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}  >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="email or ID" type="email" ref={emailRef} required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordRef} required className="w-50  d-flex justify-content-around  " class="col-lg-4 col-lg-offset-4" />
            </Form.Group>
            <br></br>
            <Buttons disabled={loading} color="info" variant="contained"endIcon={<SendIcon />} type="submit">
              Log In
            </Buttons>
          </Form>
          <div className="w-100  mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100  mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    
        </div>
    

      </div>
</div>
</div>      </div>
)
}
