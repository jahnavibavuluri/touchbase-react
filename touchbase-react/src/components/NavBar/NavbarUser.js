import React, { Component } from 'react';
import { UserMenuItems } from "./UserMenuItems";
import logo from '../../images/TouchbaseIcons/touchbase_logo.png';
import './NavbarUser.css'

class NavbarUser extends Component {
  render() {
    return (
      <nav className="navbar-user-items">
        <div className="navbar-user-logo">
          <a href='/'>
            <img src={logo} width="200" height="60"/>
          </a>
        </div>
        <div className="user-menu-items">
          <ul >
            {UserMenuItems.map((item,index) => {
              return (
                <li className="user-nav-items" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                    <img src={item.src} className="favicon" />
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

export default NavbarUser
