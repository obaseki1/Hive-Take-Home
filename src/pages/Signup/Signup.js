import React from 'react';
import './Signup.css';
function Signup() {
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
          <div className="input-div">
            <label>Full Name</label>
            <input className="textinput" type="text" />
          </div>
          <div className="input-div">
            <label>Email Address</label>
            <input className="textinput" type="text" />
          </div>
          <div className="input-div">
            <label>Password</label>
            <input className="textinput" type="password" />
          </div>
          <div className="input-div">
            <label>Confirm Password</label>
            <input className="textinput" type="password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
