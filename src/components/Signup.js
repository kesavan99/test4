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
    




      

          history.push("/update")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }




  return (
    <div className="bg-light min-vh-200 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
              <CCard className="p-4">
                <CCardBody>
                  <CForm  onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <p className="text-medium-emphasis">Sign Up to your account</p>
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
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                      
                      
                      
                      
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        ref={passwordConfirmRef}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <Buttons  disabled={loading}    color="info" variant="contained"  endIcon={<SendIcon />} type="submit" className="px-4">
                          Sign UP
                        </Buttons     >
                      </CCol>
                     
                    </CRow>
                 
                    
                  </CForm>
                </CCardBody>
              </CCard>
              
            
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

