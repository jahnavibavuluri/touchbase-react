import React from "react";
import './DeleteTouchbase.css';
import { useHistory } from "react-router-dom";

const DeleteTouchbase = props => {

  let tb_id = props.tb_id
  const history = useHistory();

  const handleDelete = (event) => {
    fetch(`/api/influencerCancel/touchbase/${tb_id}`)
      .then(response => {
        const statusCode = response.status;
        return Promise.all([statusCode]);
      })
      .then((res) => {
        console.log(res)
        if (res[0] == 200) {
          window.location.reload();
        } else {
          history.push('/error')
        }
      });
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
