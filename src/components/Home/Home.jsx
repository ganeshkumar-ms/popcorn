
//Home

import React, { useState } from 'react'
import './Home.css'
import { Footer } from '../Footer/Footer'
import { RiUserHeartFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";
import { TbChairDirector } from 'react-icons/tb';
const Home = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const submitbtn= (e)=>{
    e.preventDefault();
    if(!username || !password){
      document.querySelector('.invalid-feedback').style.display = 'block';
    }
  }

  return (
    <div>
      <div className='col-md-11 m-md-4 my-3 mx-2'>
        <div className='ms-md-5'>
          <div className="card rounded-3 py-5 border-0 text-center home container-fluid w-100 h-50" style={{ justifyContent: "center" }}>
            <div className=''>
              <img src="./Popcorn.png" alt="" style={{ height: "70px", alignItems: "center", justifyContent: "center" }} className='mb-5 position-relative' />
              <form className='row g-3 needs-validation justify-content-center login' novalidate>
                <div class=" label">
                  <div class="input-group has-validation mb-3 " >
                    <span class="input-group-text bg-secondary" id="inputGroupPrepend">
                      <RiUserHeartFill />
                    </span>
                    <input type="text" class="form-control bg-secondary-subtle" aria-describedby="inputGroupPrepend" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'  />
                  </div>
                  <div class="input-group has-validation mb-3" >
                    <span class="input-group-text bg-secondary" id="password">
                      <RiLockPasswordFill />
                    </span>
                    <input type="password" class="form-control bg-secondary-subtle" aria-describedby="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                  </div>
                  <button type="submit" className='btn rounded-5 btn-dark col-6 button' onClick={submitbtn}> <b>Login</b> <RiLoginCircleFill /></button>
                    <div class="invalid-feedback">
                     Please enter valid username and password!
                    </div>
                </div>
              </form>
              <br /><br />
              <br />
              <div className='text-white quote' style={{ marginTop: "20px" }}>
                <h1><b> Cinema is a matter of what's in the frame and what's not</b></h1>
                <span className='bg-dark px-3 '>- Martin Scorsese <TbChairDirector /> </span>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default Home