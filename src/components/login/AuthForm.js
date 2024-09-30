import React, { useState } from 'react';
import './AuthForm.css';
function AuthForm({ setLoggedIn, loggedIn }) {
  // const [isLogin,setLoggedIn] = useState(true)
  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={loggedIn ? 'active' : ' '}
            onClick={() => setLoggedIn(true)}
          >
            Login
          </button>
          <button
            className={!loggedIn ? 'active' : ' '}
            onClick={() => setLoggedIn(false)}
          >
            SignUp
          </button>
        </div>
        {loggedIn ? (
          <>
            <div className="form">
              <h2>Login Form </h2>
              <input
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              <a href="#"> Forgot Password ? </a>
              <button>Login</button>
              <p>
                Not a Member ?{' '}
                <a
                  href="#"
                  onClick={() => setLoggedIn(false)}
                >
                  Signup Now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Sign Up Form</h2>
              <input
                type="text"
                placeholder="UserName"
              ></input>
              <input
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder=" Password"
              />
              <input
                type="password"
                placeholder=" Confirm Password"
              />
              <button>Submit </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
