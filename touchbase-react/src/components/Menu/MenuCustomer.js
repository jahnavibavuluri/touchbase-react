import React from 'react';
import './Menu.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import menu_icon from '../../images/TouchbaseIcons/mobile-menu-icon.png'

export const MenuCustomer = props => {

  return (

  <body>

  <div class="mobile_nav">
    <div class="nav_bar">
      <img src={favicon} class="mobile_profile_image" alt=""></img>
      <i class="fa fa-bars nav_btn"></i>
    </div>
    <div class="mobile_nav_items">
      <a href="/dashboard"><i class="fas fa-desktop"></i><span>Home</span></a>
      <a href="/dashboard/meetings"><i class="fas fa-table"></i><span>Meetings</span></a>
      <a href="/dashboard/profile"><i class="fas fa-th"></i><span>Settings</span></a>
      <a href="/logout"><i class="fas fa-info-circle"></i><span>Logout</span></a>
    </div>
      <div class="dropdown-menu-icon">
        <i class="fas fa-th"></i>
        <span class="dropbtn-menu-icon"><img className="menu-icon-class" src={menu_icon}/></span>
        <div class="dropdown-content-menu-icon">
          <a href="/dashboard">Home</a>
          <a href="/dashboard/meetings">Meetings</a>
          <a href="/dashboard/profile">Settings</a>
          <a href="/logout">Logout</a>
        </div>
      </div>
  </div>

  <div class="sidebar">
    <div class="profile_info">
      <img href="/" src={favicon} class="profile_image" alt=""></img>
    </div>
    <a href="/dashboard"><i class="fas fa-desktop"></i><span>Home</span></a>
    <a href="/dashboard/meetings"><i class="fas fa-table"></i><span>Meetings</span></a>
    <div class="dropdown">
      <i class="fas fa-th"></i>
      <span class="dropbtn">Settings</span>
      <div class="dropdown-content">
        <a href="/dashboard/change-email">Change Email</a>
        <a href="/dashboard/change-password">Change Password</a>
      </div>
    </div>
    <a href="/logout"><i class="fas fa-info-circle"></i><span>Logout</span></a>
  </div>

    {/*<script type="text/javascript">
    $(document).ready(function(){
      $('.nav_btn').click(function(){
        $('.mobile_nav_items').toggleClass('active');
      });
    });
    </script>*/}

  </body>

  );

}
