import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const url = location.id
    console.log(url)
    console.log(location.pathname)
    fetch('/dashboard/' + location.id).then(res => res.json()).then(data => {
      console.log(data.state);
      setDashboard(data.state);
    });
  }, [location]);

  const handleLogout = (event) => {
    fetch('/logout')
      .then(res => res.json())
      .then(data => {
        console.log(data.state)
        history.push('/')
        //if(data.state === 'user in session!') {
          //history.push('/dashboard')
        //}
      });
    }


  return (
    <div className="hello">
      {/*dashboard*/}
      Welcome to Touchbase!
      <button onClick={handleLogout} type="button">Logout</button>
    </div>
  );
}
