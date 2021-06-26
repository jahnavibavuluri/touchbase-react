import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import './Login.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import {Navbar} from '../NavBar/Navbar.js'

export const Login = () => {

  const history = useHistory();

//this section takes care of the person in session
//same thing as compenentDidLoad
  useEffect(() => {
    fetch('/api/login')
  .then(response => {
    const statusCode = response.status;
    //const data = response.json();
    return Promise.all([statusCode]);
  })
  .then((res) => {
    if (res[0] === 300) {
      history.push('/dashboard')
    }
    console.log(res);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])



  const handleSignup = () => {
    history.push("/signup");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInfluencer, setInfluencer] = useState(false);
  const [rememberMe, setRememberMe] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    //const { email, firstName, lastName, password } = this.state
    fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:password,
        isInfluencer: isInfluencer,
        rememberMe: true
      })
    }).then(response => {
      const statusCode = response.status;
      //const data = response.json();
      return Promise.all([statusCode]);
    })
    .then((res) => {
      if (res[0] === 200) {
        history.push('/dashboard')
      }
      console.log(res)
    })
    .catch(error => {
      console.error(error);
      return { name: "network error", description: "" };
    });
    /*.then(data => {
      if (res.status === 200) {
        history.push("/dashboard");
      } else {
        history.push("/error");
      }
      //console.log(data.state)});*/
  }


  return (
    <div className="login-page-div">
      <Navbar />
      <div className="login-page-responsive">
        <div className="login-logo">
          <img src={logo} width="200" height="60"></img>
        </div>
        <div className="login-header">
          Welcome Back
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <label className="login-label" for="email">Email</label>
            <br />
            <input className="login-input" type="text" id="email" name="email" onChange={handleEmail}/>
            <br />
            <label className="login-label" for="password">Password</label>
            <br />
            <input className="login-input" type="password" id="password" name="password" onChange={handlePassword}/>
            <br />
            <div className="isInfluencer">
              <label for="influencer" className="login-label">Logging in as an Influencer?</label>
              <ToggleSwitch id="influencer" className="toggle-switch-checkbox" checked={isInfluencer} onChange={setInfluencer}/>
            </div>
            {/*<div className="remember-me">
              <p>Remember me? <ToggleSwitch className="remember-me-toggle" checked={rememberMe} onChange={setRememberMe}/></p>
            </div>*/}
            <div className="submit-div">
            <button className="login-button-submit">
              Login
            </button>
            </div>
          </form>
          <div className="redirect-to-login">
            <p>New to Touchbase? <Link onClick={handleSignup} className="signup-link">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
