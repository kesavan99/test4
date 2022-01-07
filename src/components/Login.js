import React , { useRef, useState } from 'react'
import { Form } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from "react-router-dom"

import SendIcon from '@mui/icons-material/Send';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from '@mui/material/Button';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'



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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm  onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText  >
                      
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" ref={emailRef}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                      
                      
                      
                      
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        ref={passwordRef}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <Buttons  disabled={loading}    color="info" variant="contained"  endIcon={<SendIcon />} type="submit" className="px-4">
                          Login
                        </Buttons     >
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      If you donot have Account in CGI , lets create the account in below link </p>
                    <Link to="/Signup">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        SignUp!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

