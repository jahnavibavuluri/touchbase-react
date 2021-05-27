import React from 'react';
import './Menu.css'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'

export const MenuInfluencer = props => {

  return (

  <body>

    <div class="mobile_nav">
      <div class="nav_bar">
        <img src={favicon} class="mobile_profile_image" alt=""></img>
        <i class="fa fa-bars nav_btn"></i>
      </div>
      <div class="mobile_nav_items">
        <a href="/dashboard"><i class="fas fa-desktop"></i><span>Home</span></a>
        <a href="/dashboard/yourtouchbases"><i class="fas fa-cogs"></i><span>Touchbases</span></a>
        <a href="/dashboard/meetings"><i class="fas fa-table"></i><span>Meetings</span></a>
        <a href="/dashboard/profile"><i class="fas fa-th"></i><span>Settings</span></a>
        <a href="/logout"><i class="fas fa-info-circle"></i><span>Logout</span></a>
      </div>
    </div>

    <div class="sidebar">
      <div class="profile_info">
        <img src={favicon} class="profile_image" alt=""></img>
        <h4>{props.user}</h4>
      </div>
      <a href="/dashboard"><i class="fas fa-desktop"></i><span>Home</span></a>
      <a href="/dashboard/yourtouchbases"><i class="fas fa-cogs"></i><span>Touchbases</span></a>
      <a href="/dashboard/meetings"><i class="fas fa-table"></i><span>Meetings</span></a>
      <a href="/dashboard/profile"><i class="fas fa-th"></i><span>Settings</span></a>
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
