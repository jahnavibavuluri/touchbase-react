import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import logo from '../../images/TouchbaseIcons/touchbase_logo.png';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-items">
        <div className="navbar-logo">
          <a href='/'>
            <img src={logo} className="logo"/>
          </a>
        </div>
        <div className="menu-items">
          <ul >
            {MenuItems.map((item,index) => {
              return (
                <li className="nav-items" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
