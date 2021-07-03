import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Error.css'

export const Error = () => {

  const history = useHistory();

  const handleBack = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="error-page-main-content">
      <div className="error">
        404
      </div>
      <div className="heading">
        Whoops!
      </div>
      <div className="text">
        Sorry, looks like something went wrong. Please try again or contact sue@tchbse.com for more help.
      </div>
      <div className="button">
        <button className="back-to-landing-page" onClick={handleBack} type="button">Go Back Home</button>
      </div>
    </div>
  );
}
