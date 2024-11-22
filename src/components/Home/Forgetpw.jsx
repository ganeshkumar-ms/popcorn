import React, { useState } from 'react';
import './Forgetpw.css';
import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { Footer } from '../Footer/Footer';  
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false); 
  const [error, setError] = useState(false); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const submitbtn = (e) => {
    e.preventDefault();
    setError(false);
    setEmailError(false);

   
    if (!email) {
      setError(true);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    console.log("Password reset link sent to: ", email);

    setIsSubmitted(true);

    setEmail("");
  };

  return (
    <>
      <div className="container-fluid px-3 my-4 d-flex justify-content-center align-items-center">
        <div className="card rounded-3 border-0 text-center col-12 forgetpwbg">
          <div className="img">
            <img
              src="./Popcorn.png"
              alt="Popcorn"
              style={{ height: "70px", alignItems: "center", justifyContent: "center" }}
              className="mb-3 mt-5 position-relative"
            />
            <div className="responsiveform" style={{marginTop:"80px"}}>
              {isSubmitted ? (
                <div className="success-message" style={{marginTop:"110px"}}>
                  <h4>Your reset password link has been sent to your email!</h4>
                  <p>Please check your inbox for the reset link.</p>
                  <Link to="/login" className="btn btn-dark mt-3">Back to Login</Link>
                </div>
              ) : (
                <form className="row needs-validation signup " noValidate>
                  {/* Email Input */}
                  <div className="d-flex justify-content-center mb-3">
                    <div className="input-group has-validation ">
                      <span className="input-group-text bg-secondary">
                        <RiMailFill />
                      </span>
                      <input
                        type="email"
                        className="form-control bg-secondary-subtle"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  {emailError && (
                    <div className="invalid-feedback d-block py-1">
                      Please enter a valid email address!
                    </div>
                  )}

              
                  {error && (
                    <div className="invalid-feedback d-block py-1">
                      Please fill in your email!
                    </div>
                  )}

          
                  <button
                    type="submit"
                    onClick={submitbtn}
                    className="btn rounded-5 btn-dark col-6 button mt-1"
                  >
                    <b>Send Reset Link</b> <RiLockPasswordFill />
                  </button>

    
                  <p className="login mt-2">
                    Remembered your password? <strong><Link to='/login'>Log in</Link></strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgetPassword;
