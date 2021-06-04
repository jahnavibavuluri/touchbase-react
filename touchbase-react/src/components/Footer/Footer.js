import React, { Component } from 'react';
import { FooterItems } from "./FooterItems";
import logo from '../../images/TouchbaseIcons/touchbase_logo.png';
import facebook from '../../images/TouchbaseIcons/fb-icon.png';
import twitter from '../../images/TouchbaseIcons/twitter-icon.png';
import insta from '../../images/TouchbaseIcons/instagram-icon.png';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <nav className="footer-div">

        {/*<div className="footer-menu-items">
          <ul >
            {FooterItems.map((item,index) => {
              return (
                <li className="footer-items" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>*/}

        <div className="footer-logo">
          <a href='/'>
            <img src={logo} width="200" height="60"/>
          </a>
        </div>

        <div className="touchbase-social-icons">
          <a href='/twitter'>
            <img src={twitter} />
          </a>
          <a href='/instagram'>
            <img src={insta} />
          </a>
          <a href='/facebook'>
            <img src={facebook} />
          </a>
        </div>

        <div className="copyright">
          Copyright &copy; 2021 Touchbase.co
        </div>


        {/*<div className="copyright">
          <div className="copyright-text">
            Copyright &copy; 2021 Touchbase.co
          </div>
        </div>*/}
      </nav>
    )
  }
}

export default Footer
