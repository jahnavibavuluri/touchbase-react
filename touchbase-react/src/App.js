import React from 'react';
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
import { Explore } from './components/Explore/Explore'
import { About } from './components/About/About'
import { InfluencerTouchbases } from './components/InfluencerTouchbases/InfluencerTouchbases'
import { Iterations } from './components/Iterations/Iterations'
//import Navbar from './components/NavBar/Navbar.js'
//import Footer from './components/Footer/Footer.js'

function App() {

  return (
    //to add navbar, add it here and to style it, add it in App.css
    <Router>
      <div className="public-pages">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/featured" component={Featured} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/seller/:id" component={InfluencerTouchbases}/>
            <Route path="/iterations" component={Iterations}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/explore" component={Explore}/>
          </Switch>
      </div>

      <div className="user-pages">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout}/>
          <Route path="/dashboard/yourtouchbases" component={YourTouchbases}/>
          <Route path="/dashboard/meetings" component={Meetings}/>
          <Route path="/dashboard/profile" component={Profile}/>
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
