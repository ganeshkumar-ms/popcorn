
//Login

import React, { useState } from 'react'
import './Login.css'
import { Footer } from '../Footer/Footer'
import { RiUserHeartFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";
import { TbChairDirector } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitbtn = (e) => {
    e.preventDefault();
    if (!username || !password) {
      document.querySelector('.invalid-feedback').style.display = 'block';
    }
  }

  return (
    <><div className="container-fluid px-3 my-4 d-flex justify-content-center align-items-center col-12">
    <div className="card rounded-3 border-0 text-center loginbg">
      <div className="img">
        <img
          src="./Popcorn.png"
          alt=""
          style={{ height: "70px" }}
          className="mb-5 mt-5 position-relative"
        />
        <div className="responsiveform">
          <form className="row needs-validation login" noValidate>
          <div className="d-flex justify-content-center">
            <div className="input-group has-validation mb-3 input">
              <span className="input-group-text bg-secondary">
                <RiUserHeartFill />
              </span>
              <input
                type="text"
                className="form-control bg-secondary-subtle"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            </div>

            <div className="d-flex justify-content-center my-2">
            <div className="input-group has-validation password">
              <span className="input-group-text bg-secondary">
                <RiLockPasswordFill />
              </span>
              <input
                type="password"
                className="form-control bg-secondary-subtle"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            </div>
  
            <div className="invalid-feedback py-1">
              Please enter valid username and password!
            </div>
  
            <button
              type="submit"
              onClick={submitbtn}
              className="btn rounded-5 btn-dark col-6 button mt-1"
            >
              <b>Login</b> <RiLoginCircleFill />
            </button>
            <strong><Link to="/forgetpassword" >Forget Password?</Link></strong>
            <p className="signup">
              Don't have an account? <strong><Link to='/signup'>Sign up</Link></strong>
            </p>
  
          </form>
        </div>
  
        <div className="text-white quote py-4 mt-4">
          <h1>
            <b> Cinema is a matter of what's in the frame and what's not</b>
          </h1>
          <span className="bg-dark px-3">- Martin Scorsese <TbChairDirector /> </span>
        </div>
      </div>
    </div>
  </div>
   <Footer />
    </>
  )
}

export default Login