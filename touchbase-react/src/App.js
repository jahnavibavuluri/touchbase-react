import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LandingPage } from './components/LandingPage/LandingPage'
import { SignupPage } from './components/SignupPage/SignupPage'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Login } from './components/Login/Login'
import { Logout } from './components/Logout/Logout'
import { YourTouchbases } from './components/YourTouchbases/YourTouchbases'
import { Profile } from './components/Profile/Profile'
import { Featured } from './components/Featured/Featured'
import { Explore } from './components/Explore/Explore'
import { About } from './components/About/About'
import { InfluencerTouchbases } from './components/InfluencerTouchbases/InfluencerTouchbases'
import { Iterations } from './components/Iterations/Iterations'
import { MeetingsUpcoming } from './components/Meetings/MeetingsUpcoming'
import { MeetingsPast } from './components/Meetings/MeetingsPast'
import { InfluencerInfo } from './components/InfluencerInfo/InfluencerInfo'
import { ChangeEmail } from './components/Settings/ChangeEmail'
import { ChangePassword } from './components/Settings/ChangePassword'
import { Error } from './components/Error/Error'
import { ForgotPassword } from './components/Login/ForgotPassword'
import { ResetPassword } from './components/Login/ResetPassword'
//import Navbar from './components/NavBar/Navbar.js'
//import Footer from './components/Footer/Footer.js'

function App() {

  return (
    //to add navbar, add it here and to style it, add it in App.css
    <Router>
      <div className="public-pages">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/seller/:id" component={InfluencerTouchbases}/>
            <Route path="/api/seller/:id1/iterations/:id2" component={Iterations}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup/influencer-info" component={InfluencerInfo}/>
            <Route path="/error" component={Error} />
            <Route exact path='/forgotpassword' component={ForgotPassword}/>
            <Route path='/forgotpassword/:token' component={ResetPassword}/>
          </Switch>
      </div>

      <div className="user-pages">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout}/>
          <Route path="/dashboard/yourtouchbases" component={YourTouchbases}/>
          <Route path="/dashboard/meetings" component={MeetingsUpcoming}/>
          <Route path="/dashboard/past-meetings" component={MeetingsPast}/>
          <Route path="/dashboard/change-email" component={ChangeEmail}/>
          <Route path="/dashboard/change-password" component={ChangePassword}/>
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
