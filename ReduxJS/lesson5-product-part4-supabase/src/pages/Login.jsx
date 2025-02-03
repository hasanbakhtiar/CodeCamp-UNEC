


import React, { useRef } from 'react'
import { Col, Container } from 'react-bootstrap'
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";

const userAuth = {
  email:"hasan@webluna.org",
  password:"hasan12345"
}


const Login = () => {
  
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const formSubmit = (e)=>{
      e.preventDefault();
          if (!emailRef.current.value || !passRef.current.value) {
            Swal.fire({
              title: "Please, fill inputs",
              icon: "warning"
                });
          } else{
            if (emailRef.current.value === userAuth.email && passRef.current.value === userAuth.password) {
              navigate('/dashboard');
            }else{
            Swal.fire({
              title: "Email or password is wrong!",
              icon: "error"
                });
            }
          }
    }
    return (
        <Container>
            <p className='h1 text-center '>Login</p>
            <div className="d-flex align-items-center justify-content-center">
                <Col sm={12} md={5}>
                    <form onSubmit={formSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input ref={emailRef} type="email" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input ref={passRef} type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>

                </Col>
            </div>
        </Container >
    )
}

export default Login
