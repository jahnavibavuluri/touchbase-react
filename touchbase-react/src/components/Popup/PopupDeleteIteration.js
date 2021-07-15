import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import './PopupDeleteIterations.css';

const PopupDeleteIteration = props => {

  const [isInfluencer, setInfluencer] = useState(false)
  const history = useHistory();

  useEffect(() => {
    fetch('/api/isLoggedIn')
  .then(response => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  })
  .then((res) => {
    console.log(res)
    if (res[0] === 201) {
      console.log("customer is logged in!")
    } else if (res[0] === 202) {
      console.log("influencer is logged in!")
      setInfluencer(true)
    } else {
      history.push("/error")
    }
    //console.log(res);
    //console.log(influencerDashboard);
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
  },[])

  let tb_id = props.tb_id
  let iter_id = props.iter_id
  console.log('the tb id is: ' + tb_id)
  console.log('the iteration id is: ' + iter_id)

  const handleDelete = (event) => {

    if (isInfluencer === false) {
      fetch(`/api/customerCancel/${tb_id}/${iter_id}`)
        .then(response => {
          const statusCode = response.status;
          //const data = response.json();
          return Promise.all([statusCode]);
        })
        .then((res) => {
          console.log(res);
          if (res[0] === 404) {
            history.push('/error')
          } else {
            window.location.reload();
          }
        })
        .catch(error => {
          console.error(error);
          return { name: "network error", description: "" };
        });
    } else if (isInfluencer === true) {
      fetch(`/api/influencerCancel/iteration/${iter_id}`)
        .then(response => {
          const statusCode = response.status;
          //const data = response.json();
          return Promise.all([statusCode]);
        })
        .then((res) => {
          console.log(res);
          if (res[0] === 404) {
            history.push('/error')
          } else {
            window.location.reload();
          }
        })
        .catch(error => {
          console.error(error);
          return { name: "network error", description: "" };
        });
    }

  }

  return (
    <div className="popup-box-delete-iteration">
      <div className="box-delete-iteration">
        <span className="close-icon-delete-iteration" onClick={props.handleClose}>x</span>
        <div className="delete-confirmation">
          {props.content}
        </div>
        <button className="no" onClick={props.handleClose}>No</button>
        <button className="yes" onClick={handleDelete}>Yes</button>
      </div>
    </div>
  );
};

export default PopupDeleteIteration;
