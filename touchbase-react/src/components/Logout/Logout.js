import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"

export const Logout = () => {

  const history = useHistory();

  useEffect(() => {
    fetch('/api/logout')
      .then(response => {
        const statusCode = response.status;
        return Promise.all([statusCode]);
      })
      .then((res) => {
        if (res[0] == 200) {
          history.push('/')
          window.location.reload();
        } else {
          history.push('/error')
        }
      });
    },[])

  return (
    <div>Logging you out...</div>
  );
}
