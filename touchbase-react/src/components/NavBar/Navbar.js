import React, { useEffect, useState, Component } from 'react';
import { MenuItems } from "./MenuItems";
import logo from '../../images/TouchbaseIcons/touchbase_logo.png';
import './Navbar.css'

export const Navbar = () => {

  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/api/isLoggedIn')
  .then(response => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  })
  .then((res) => {
    if (res[0] === 201 || res[0] === 202) {
      setLoggedIn(true);
      setUsername(res[1].firstName + " " + res[1].lastName);
    }
    console.log(res);
    console.log(username)
  })
  .catch(error => {
    console.error(error);
    return { name: "network error", description: "" };
  });
},[])

    return (
      <nav className="navbar-items">
        <div className="navbar-logo">
          <a href='/'>
            <img src={logo} className="logo"/>
          </a>
        </div>
        <div className="menu-items">
          {!loggedIn && <ul >
            {MenuItems.map((item,index) => {
              return (
                <li className="nav-items" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>}
          {loggedIn && <ul>
              <li className="nav-items">
                <a className="nav-links-sign-up" href="/dashboard">
                  {username}
                </a>
              </li>
            </ul>
          }
        </div>
      </nav>
    );
  }

//export default Navbar
