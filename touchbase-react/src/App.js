import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LandingPage } from './components/LandingPage/LandingPage'
import { SignupPage } from './components/SignupPage/SignupPage'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Login } from './components/Login/Login'
import { Logout } from './components/Logout/Logout'
import { YourTouchbases } from './components/YourTouchbases/YourTouchbases'
import { Meetings } from './components/Meetings/Meetings'
import { Profile } from './components/Profile/Profile'
import { Featured } from './components/Featured/Featured'
import Navbar from './components/NavBar/Navbar.js'
import Footer from './components/Footer/Footer.js'

function App() {

  /*
  const [landingPage, setLandingPage] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.welcome);
      setLandingPage(data.welcome);
    });
  }, []);

  console.log(landingPage)
*/

  return (
    //to add navbar, add it here and to style it, add it in App.css
    <Router>
    {/*
      <div className="navbar">
        <Navbar/>
      </div>
    */}
    <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/featured" component={Featured} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/dashboard/yourtouchbases" component={YourTouchbases}/>
          <Route path="/dashboard/meetings" component={Meetings}/>
          <Route path="/dashboard/profile" component={Profile}/>
        </Switch>
      </div>
    <Footer />
    </Router>
  );
}

export default App;


/*
function App() {
  const [landingPage, setLandingPage] = useState([]);

  useEffect(() => {
    fetch("/").then(response =>
      response.json().then(data => {
        setLandingPage(data);
      })
    );
  }, []);

  console.log(setLandingPage);

  return (
    <div className="App">
      <LandingPage landingPage = {landingPage}/>
    </div>
  );
}

export default App;
*/
