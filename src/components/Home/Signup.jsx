import React, { useState } from 'react';
import "./Signup.css";
import { RiUserHeartFill, RiLockPasswordFill } from 'react-icons/ri';
import { Footer } from '../Footer/Footer';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false); // Track error visibility
  const [passwordError, setPasswordError] = useState(false); // Track confirm password error
  const [emailError, setEmailError] = useState(false); // Track email format error

  const submitbtn = (e) => {
    e.preventDefault();

    // Reset error states before validation
    setError(false);
    setPasswordError(false);
    setEmailError(false);

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError(true);
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    // Handle form submission (e.g., API call here)
    console.log("Form submitted!");
  };

  return (
    <>
      <div className="container-fluid px-3 my-4 d-flex justify-content-center align-items-center">
        <div className="card rounded-3 border-0 text-center col-12 signupbg" >
          <div className="img">
            <img
              src="./Popcorn.png"
              alt="Popcorn"
              style={{ height: "70px", alignItems: "center", justifyContent: "center" }}
              className="mb-3 mt-5 position-relative"
            />
            <div className="responsiveform">
              <form className="row needs-validation signup mt-3" noValidate>
                {/* Username */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="input-group has-validation w-75">
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

                {/* Email */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="input-group has-validation w-75">
                    <span className="input-group-text bg-secondary">
                      <MdAlternateEmail />
                    </span>
                    <input
                      type="email"
                      className="form-control bg-secondary-subtle"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                {emailError && (
                  <div className="invalid-feedback d-block py-1">
                    Please enter a valid email address!
                  </div>
                )}

                {/* Password */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="input-group has-validation w-75">
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

                {/* Confirm Password */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="input-group has-validation w-75">
                    <span className="input-group-text bg-secondary">
                      <GiConfirmed/>
                    </span>
                    <input
                      type="password"
                      className="form-control bg-secondary-subtle"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                {passwordError && (
                  <div className="invalid-feedback d-block py-1">
                    Passwords do not match!
                  </div>
                )}

                {/* General Error Message */}
                {error && (
                  <div className="invalid-feedback d-block py-1">
                    Please fill all the fields!
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={submitbtn}
                  className="btn rounded-5 btn-dark col-6 button mt-1"
                >
                  <b>Sign Up</b> <SiGnuprivacyguard/>
                </button>

                {/* Sign Up Link */}
                <p className="login mt-2">
                  Already have an account? <strong><Link to='/login'>Log in</Link></strong>
                </p>
              
              </form>
            </div>
          
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
