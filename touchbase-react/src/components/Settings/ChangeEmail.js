import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import './ChangeEmail.css'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'

export const ChangeEmail = () => {

  const [isInfluencer, setInfluencer] = useState(false);
  let dashboard;
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleNewEmail = (event) => {
    setNewEmail(event.target.value);
  }

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }


  const changeEmail = (event) => {
    event.preventDefault();
    fetch('/api/profile/edit/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify({
        password:password,
        newEmail:newEmail
      })
    }).then(response => {
       const statusCode = response.status;
       return Promise.all([statusCode]);
    })
    .then((res) => {
      console.log(res);
      if (res[0] === 202 || res[0] === 200) {

      } else {
        history.push('/error')
      }
    })

  }

  useEffect(() => {
    fetch('/api/dashboard')
  .then(response => {
    const statusCode = response.status;
    return Promise.all([statusCode]);
  })
  .then((res) => {
    if (res[0] === 200) {
      console.log("customer is logged in!")
    } else if (res[0] === 202) {
      console.log("influencer is logged in!")
      handleInfluencer()
    }
    //console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
  },[])

  if (isInfluencer) {
    dashboard = <MenuInfluencer />
  } else {
    dashboard = <MenuCustomer />
  }

  return(
    <div>{dashboard}
      <div className="popup-box-email">
        <div className="box-email">
          {/*<span className="close-icon-email" onClick={props.handleClose}>x</span>*/}
          <h1>Change Email</h1>
          <div className="headings-email">
            <input className="email-input" placeholder="Your Password" onChange={handlePassword}/>
            <input className="email-input" placeholder="New Email" onChange={handleNewEmail}/>
          </div>
          <div className="form-buttoms-email">
            {/*<button className="cancel-button-email" onClick={props.handleClose}>Cancel</button>*/}
            <button className="save-button-email" onClick={changeEmail} >Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
