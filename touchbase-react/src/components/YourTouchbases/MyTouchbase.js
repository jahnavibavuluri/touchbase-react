import React, {useEffect, useState} from 'react';
import './MyTouchbase.css';
import { useHistory } from "react-router-dom";
import DeleteTouchbase from '../Popup/DeleteTouchbase.js'

const MyTouchbase = props => {

  let tb_id = props.tb_id
  console.log(props.tb_id)
  const history = useHistory();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const toggleDelete = () => {
    setIsOpenDelete(!isOpenDelete);
  }

  const handleDelete = (event) => {

  }

  /*const handleDelete = (event) => {
    fetch('/api/isLoggedIn')
      .then(response => {
        const statusCode = response.status;
        return Promise.all([statusCode]);
      })
      .then((res) => {
        if (res[0] === 201) {
          //customer is logged in


          fetch(`/api/customerCancel/${tb_id}/${iter_id}`)
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
            })
            .catch(error => {
              console.error(error);
              return { name: "network error", description: "" };
            });



        }
      })
      .catch(error => {
        console.error(error);
        return { name: "network error", description: "" };
      });
  }*/



  return(
    <div className="my-touchbase-content-ind">
      <div className="my-touchbase-content-ind-title">{props.title}</div>
      <div className="my-touchbase-content-ind-description">{props.description}</div>
      <div>Cost: ${props.cost}</div>
      <div>{props.next}</div>
      <div className="my-touchbase-content-buttons">
        <button className="my-touchbase-content-delete" onClick={toggleDelete}>Delete</button>
      </div>
      {isOpenDelete && <DeleteTouchbase handleClose={toggleDelete} tb_id={tb_id}/>}
    </div>
  );

}

export default MyTouchbase;
