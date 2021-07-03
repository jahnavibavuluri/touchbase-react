import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import './ForgotPassword.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

export const ForgotPassword = () => {

  const history = useHistory();

  const [isInfluencer, setInfluencer] = useState(false)
  const [email, setEmail] = useState("")

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleForgotPassword = (event) => {

    event.preventDefault();
    //const { email, firstName, lastName, password } = this.state
    fetch('/api/forgotPassword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        isInfluencer: isInfluencer,
      })
    }).then(response => {
      const statusCode = response.status;
      //const data = response.json();
      return Promise.all([statusCode]);
    })
    .then((res) => {
      console.log(res)
      if (res[0] == 200) {
        history.push("/login")
      } else {
        history.push('/error')
      }
    })
    .catch(error => {
      console.error(error);
      return { name: "network error", description: "" };
    });

  }

  return (
    <div className="login-page-responsive">
      <div className="login-logo">
        <img src={logo} width="200" height="60"></img>
      </div>
      <div className="login-header">
        Please enter your email below and we will send a password reset link to that email!
      </div>
      <div className="login-form">
        <form onSubmit={handleForgotPassword}>
          <label className="login-label" for="email">Email</label>
          <br />
          <input className="login-input" type="text" id="email" name="email" onChange={handleEmail}/>
          <br/>
          <div className="isInfluencer">
            <label for="influencer" className="login-label">Are you an Influencer?</label>
            <ToggleSwitch id="influencer" className="toggle-switch-checkbox" checked={isInfluencer} onChange={setInfluencer}/>
          </div>
          {/*<div className="remember-me">
            <p>Remember me? <ToggleSwitch className="remember-me-toggle" checked={rememberMe} onChange={setRememberMe}/></p>
          </div>*/}
          <div className="submit-div">
          <button className="login-button-submit">
            Send Link
          </button>
          </div>
        </form>
        <div className="redirect-to-home">
          <a href='/'> Back to Home </a>
        </div>
      </div>
    </div>
  );
}
