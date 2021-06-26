import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import './SignupPage.css'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import {Navbar} from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'

export const SignupPage = () => {
  const history = useHistory();
  //let influencerSignupInfo;

/*
  useEffect(() => {
    fetch('/signup').then(response => {
      if (response.status === 200) {
        console.log("hey, we are good to go!")
      }
    })
  },[])
*/

  const handleLogin = () => {
    history.push("/login");
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isInfluencer, setInfluencer] = useState(false);
  const [categories, setCategories] = useState("");
  const [bio, setBio] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");

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

  const handleCategories = (event) => {
    setCategories(event.target.value);
  }

  const handleBio = (event) => {
    setBio(event.target.value);
  }

  const handleTwitterHandle = (event) => {
    setTwitterHandle(event.target.value);
  }

  const handleInstagramHandle = (event) => {
    setInstagramHandle(event.target.value);
  }

  const handleRegistration = (event) => {
    event.preventDefault();
    //const { email, firstName, lastName, password } = this.state;

    fetch('/api/signup', {
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
        isInfluencer: isInfluencer,
        categories: categories,
        bio: bio,
        instagramHandle: instagramHandle,
        twitterHandle: twitterHandle
      })
    }).then(response => {
       const statusCode = response.status;
       return Promise.all([statusCode]);
    }).then((res) => {
      //console.log(res);
      if (res[0] === 202) {
        fetch('/api/signup/influencerStripe')
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((res) => {
          console.log(res);
          history.push(res[1].link)  /*ERROR HERE THIS SHOULD PUSH TO JUST HTTPS NOT LOCALHOST*/
        })
        .catch(error => {
          console.error(error);
          return { name: "network error", description: "" };
        });
      } else if (res[0] === 201) {
        history.push('/dashboard')
      } else {
        history.push('/error')
      }
    })
  }


  /*const handleStripe = {
    useEffect(() => {
      fetch('/signup/influencerStripe')
    .then(response => {
      const statusCode = response.status;
      //const data = response.json();
      return Promise.all([statusCode]);
    })
    .then((res) => {
      console.log(res);
    })
    .catch(error => {
      console.error(error);
      return { name: "network error", description: "" };
    });
  },[])
}*/


  const influencerSignupInfo = isInfluencer ?
  <div className="influencer-extra-info">
    <div className="influencer-extra-info-form">
      {/*<form onSubmit={handleRegistration}>*/}
        <label className="sign-up-label" for="firstName">Bio</label>
        <br />
        <textarea className="sign-up-input" name="influencer-bio" cols="40" rows="5" onChange={handleBio}></textarea>
        <br />
        <label className="sign-up-label" for="lastName">Twitter Handle</label>
        <br />
        <input className="sign-up-input" type="text" id="lastName" name="lastName" onChange={handleTwitterHandle}/>
        <br />
        <label className="sign-up-label" for="email">Instagram Handle</label>
        <br />
        <input className="sign-up-input" type="text" id="email" name="email" onChange={handleInstagramHandle}/>
        <br />
        <label className="sign-up-label" for="password">Categories -- Please enter your categories with a comma in between</label>
        <br />
        <input className="sign-up-input" type="text" id="venmo" name="venmo" onChange={handleCategories}/>
        <br />
        {/*<div className="select-categories">
          <button value="Food" onClick={handleCategory}>Food</button>
          <button value="Fashion" onClick={handleCategory}>Fashion</button>
          <button value="Gaming" onClick={handleCategory}>Gaming</button>
          <button value="Home Decor" onClick={handleCategory}>Home Decor</button>
          <button value="Entertainment" onClick={handleCategory}>Entertainment</button>
          <button value="Makeup" onClick={handleCategory}>Makeup</button>
          <button value="Fitness" onClick={handleCategory}>Fitness</button>
          <button value="Beauty" onClick={handleCategory}>Beauty</button>
          <button value="Technology" onClick={handleCategory}>Technology</button>
          <button value="Photography" onClick={handleCategory}>Photography</button>
          <button value="Design" onClick={handleCategory}>Design</button>
          <button value="Art" onClick={handleCategory}>Art</button>
          <button value="Dance" onClick={handleCategory}>Dance</button>
        </div>*/}
      {/*</form>*/}
    </div>
  </div>
  : null;

  /*
  /*
  /*if (isInfluencer === true) {
    influencerSignupInfo =
    <div className="influencer-info-page-responsive">
      <div className="influencer-info-logo">
        <img src={logo} width="200" height="60"></img>
      </div>
      <div className="influencer-info-header">
        Before we get started, we would like to get to know you better.
      </div>
      <div className="influencer-info-form">
        {/*<form onSubmit={handleRegistration}>
          <label className="influencer-info-label" for="firstName">Bio</label>
          <br />
          <textarea className="influencer-info-bio" name="influencer-bio" cols="40" rows="5"></textarea>
          <br />
          <label className="influencer-info-label" for="lastName">Twitter Handle</label>
          <br />
          <input className="influencer-info-input" type="text" id="lastName" name="lastName" />
          <br />
          <label className="influencer-info-label" for="email">Instagram Handle</label>
          <br />
          <input className="influencer-info-input" type="text" id="email" name="email" />
          <br />
          <label className="influencer-info-label" for="venmo">Vemno Handle (This is how you will be paid!)</label>
          <br />
          <input className="influencer-info-input" type="text" id="venmo" name="venmo" />
          <br />
          <label className="influencer-info-label" for="password">Categories -- Please enter your categories with a comma in between</label>
          <br />
          <input className="influencer-info-input" type="text" id="venmo" name="venmo" />
          <br />
        <div className="select-categories">
            <button value="Food" onClick={handleCategory}>Food</button>
            <button value="Fashion" onClick={handleCategory}>Fashion</button>
            <button value="Gaming" onClick={handleCategory}>Gaming</button>
            <button value="Home Decor" onClick={handleCategory}>Home Decor</button>
            <button value="Entertainment" onClick={handleCategory}>Entertainment</button>
            <button value="Makeup" onClick={handleCategory}>Makeup</button>
            <button value="Fitness" onClick={handleCategory}>Fitness</button>
            <button value="Beauty" onClick={handleCategory}>Beauty</button>
            <button value="Technology" onClick={handleCategory}>Technology</button>
            <button value="Photography" onClick={handleCategory}>Photography</button>
            <button value="Design" onClick={handleCategory}>Design</button>
            <button value="Art" onClick={handleCategory}>Art</button>
            <button value="Dance" onClick={handleCategory}>Dance</button>
          </div>
          <div className="influencer-info-submit-div">
          <button className="influencer-info-button-submit">
            Agree & Join
          </button>
          </div>
      </div>
    </div>
  } else {
    influencerSignupInfo = <div></div>
  }
  */

  return (
    <div className="sign-up-page-div">
      <Navbar />
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
            {influencerSignupInfo}
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
