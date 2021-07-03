import React from "react";
import './DeleteTouchbase.css';
import { useHistory } from "react-router-dom";

const DeleteTouchbase = props => {

  const handleDelete = (event) => {

  }

  return (
    <div className="popup-box-delete-touchbase">
      <div className="box-delete-touchbase">
        <div className="delete-confirmation-touchbase">
          Are you sure you want to cancel this Touchbase?
        </div>
        <button className="no-touchbase" onClick={props.handleClose}>No</button>
        <button className="yes-touchbase" onClick={handleDelete}>Yes</button>
      </div>
    </div>
  );
}

export default DeleteTouchbase
