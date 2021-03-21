import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignupPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

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
        password:password
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
      <div className="sign-up-page">
      <div class="card">
      <p className = "sign-up-text"> SIGN UP</p>
      <br />
      <form onSubmit={handleRegistration}>
      <input className="sign-up-input" placeholder="First Name" type="text" id="firstName" name="firstName" onChange={handleFirstName}/>
      <br />
      <input className="sign-up-input" placeholder="Last Name" type="text" id="lastName" name="lastName" onChange={handleLastName}/>
      <br />
      <input className="sign-up-input" placeholder="Email" type="text" id="email" name="email" onChange={handleEmail}/>
      <br />
      <input className="sign-up-input" placeholder="Password" type="password" id="password" name="password" onChange={handlePassword}/>
      <br />
      <div className="sign-up-bottom-info">
              Already have an account?
      </div>
      <button className="sign-up-button-submit">
        Submit
      </button>
      </form>
      </div>
      </div>
    </div>
  );
}
