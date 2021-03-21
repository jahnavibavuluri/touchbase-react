import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage'
import { SignupPage } from './components/SignupPage'
import { Dashboard } from './components/Dashboard'

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
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
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
