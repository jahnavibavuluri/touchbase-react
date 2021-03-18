import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
//import './App.css';
import { LandingPage } from './components/LandingPage'

function App() {
  const [landingPage, setLandingPage] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.welcome);
      setLandingPage(data.welcome);
    });
  }, []);

  console.log(landingPage)

  return (
    <div className="App">
      <header className="App-header">
        <LandingPage/>
      </header>
    </div>
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
