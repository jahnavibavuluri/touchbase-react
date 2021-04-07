import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch('/dashboard').then(res => res.json()).then(data => {
      console.log(data.state);
      setDashboard(data.state);
    });
  }, []);

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
