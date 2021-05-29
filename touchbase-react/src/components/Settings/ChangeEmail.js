import React, { useEffect, useState } from "react";
import './ChangeEmail.css'
import { MenuInfluencer } from '../Menu/MenuInfluencer.js'
import { MenuCustomer } from '../Menu/MenuCustomer.js'

export const ChangeEmail = () => {

  const [isInfluencer, setInfluencer] = useState(false);
  let dashboard;

  const handleInfluencer = (event) => {
    setInfluencer(true);
  }

  useEffect(() => {
    fetch('/dashboard')
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
    <div>{dashboard}</div>
  );
}
