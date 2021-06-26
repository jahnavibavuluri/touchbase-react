import React from "react";
import './PopupDeleteIterations.css';
import { useHistory } from "react-router-dom";

const PopupDeleteIteration = props => {

  let tb_id = props.tb_id
  let iter_id = props.iter_id
  const history = useHistory();

  const handleDelete = (event) => {

    fetch(`/api/customerCancel/${tb_id}/${iter_id}`)
      .then(response => {
        const statusCode = response.status;
        //const data = response.json();
        return Promise.all([statusCode]);
      })
      .then((res) => {
        console.log(res);
        if (res[0] === 404) {
          //history.push('/error')
        }
      })
      .catch(error => {
        console.error(error);
        return { name: "network error", description: "" };
      });

  }

  return (
    <div className="popup-box-delete-iteration">
      <div className="box-delete-iteration">
        <span className="close-icon-delete-iteration" onClick={props.handleClose}>x</span>
        <div className="delete-confirmation">
          Are you sure you want to cancel this booking?
        </div>
        <button className="no" onClick={props.handleClose}>No</button>
        <button className="yes" onClick={handleDelete}>Yes</button>
      </div>
    </div>
  );
};

export default PopupDeleteIteration;
