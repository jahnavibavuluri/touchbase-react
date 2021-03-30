import React, { useEffect, useState } from "react";

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState("");

  useEffect(() => {
    fetch('/dashboard').then(res => res.json()).then(data => {
      console.log(data.state);
      setDashboard(data.state);
    });
  }, []);

  return (
    <div className="hello">
      {/*dashboard*/} 
      Welcome to Touchbase!
    </div>
  );
}
