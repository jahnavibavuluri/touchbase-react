import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"

export const Logout = () => {

  const history = useHistory();

  useEffect(() => {
    fetch('/logout')
      .then(res => res.json())
      .then(data => {
        console.log(data.state)
        history.push('/')
        //if(data.state === 'user in session!') {
          //history.push('/dashboard')
        //}
      });
    },[])

  return (
    <div>Logging you out...</div>
  );
}
