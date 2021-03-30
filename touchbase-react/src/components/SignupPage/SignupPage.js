import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import './SignupPage.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

export const SignupPage = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isInfluencer, setInfluencer] = useState(false);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
    setLastName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleRegistration = (event) => {
    event.preventDefault();
    //const { email, firstName, lastName, password } = this.state;

    fetch('/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:password,
        isInfluencer: isInfluencer
      })
    }).then(res => res.json()).then(data => {
      if (data.state === "Success") {
        history.push("/dashboard");
      } else {
        history.push("/error");
      }
      console.log(data.state)});
  }

  return (
    <div className="sign-up-page-div">
      <div className="sign-up-page-responsive">
        <div className="sign-up-logo">
          <img src={logo} width="200" height="60"></img>
        </div>
        <div className="sign-up-header">
          Get the personalized advice you seek.
        </div>
        <div className="sign-up-form">
          <form onSubmit={handleRegistration}>
            <label className="sign-up-label" for="firstName">First Name</label>
            <br />
            <input className="sign-up-input" type="text" id="firstName" name="firstName" onChange={handleFirstName}/>
            <br />
            <label className="sign-up-label" for="lastName">Last Name</label>
            <br />
            <input className="sign-up-input" type="text" id="lastName" name="lastName" onChange={handleLastName}/>
            <br />
            <label className="sign-up-label" for="email">Email</label>
            <br />
            <input className="sign-up-input" type="text" id="email" name="email" onChange={handleEmail}/>
            <br />
            <label className="sign-up-label" for="password">Password</label>
            <br />
            <input className="sign-up-input" type="password" id="password" name="password" onChange={handlePassword}/>
            <br />
            <div className="isInfluencer">
              <label for="influencer" className="sign-up-label">Signing up as an Influencer?</label>
              <ToggleSwitch id="influencer" className="toggle-switch-checkbox" checked={isInfluencer} onChange={setInfluencer}/>
            </div>
            <div className="agreement-div" >
            <label className="agreement">By clicking Agree and Join, you agree to the Touchbase User Agreement, Privacy Policy, and Cookie Policy.</label>
            <br />
            </div>
            <div className="submit-div">
            <button className="sign-up-button-submit">
              Agree & Join
            </button>
            </div>
          </form>
          <div className="redirect-to-login">
            <p>Already have an account? <Link onClick={handleLogin} className="login-link">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
