import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import './ResetPassword.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'

export const ResetPassword = ({match:{params:{token}}}) => {

  const [newPassword, setNewPassword] = useState("")
  const history = useHistory();

  const handlePassword = (event) => {
    setNewPassword(event.target.value)
  }

  const handleNewPassword = (event) => {
    event.preventDefault();
    //const { email, firstName, lastName, password } = this.state
    fetch(`/api/forgotPassword/${token}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newPassword:newPassword,
      })
    }).then(response => {
      const statusCode = response.status;
      //const data = response.json();
      return Promise.all([statusCode]);
    })
    .then((res) => {
      console.log(res)
      if (res[0] == 201) {
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
        Please enter your new password below.
      </div>
      <div className="login-form">
        <form onSubmit={handleNewPassword}>
          <label className="login-label" for="email">New Password</label>
          <br />
          <input className="login-input" type="password" onChange={handlePassword}/>
          <br/>
          {/*<div className="remember-me">
            <p>Remember me? <ToggleSwitch className="remember-me-toggle" checked={rememberMe} onChange={setRememberMe}/></p>
          </div>*/}
          <div className="submit-div">
          <button className="login-button-submit">
            Save
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
