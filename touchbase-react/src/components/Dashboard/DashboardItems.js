//import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import favicon from '../../images/TouchbaseIcons/favicon-black.png'
import home from '../../images/TouchbaseIcons/home-icon.png'
import touchbase from '../../images/TouchbaseIcons/your-touchbases-icon.png'
import meetings from '../../images/TouchbaseIcons/meetings-icon.png'
import settings from '../../images/TouchbaseIcons/settings-icon.png'
import logout from '../../images/TouchbaseIcons/logout-icon.png'
export const DashboardItems= [

  {
    title: 'Home',
    url: '/dashboard',
    cName: 'dashboard-links-influencer',
    src: home
  },
  {
    title: 'Touchbases',
    url: '/dashboard/yourtouchbases',
    cName: 'dashboard-links-influencer',
    src: touchbase
  },
  {
    title: 'Meetings',
    url: '/dashboard/meetings',
    cName: 'dashboard-links-influencer',
    src: meetings
  },
  {
    title: 'Profile',
    url: '/dashboard/profile',
    cName: 'dashboard-links-influencer',
    src: settings
  },
  {
    title: 'Logout',
    url: '/logout',
    cName: 'dashboard-links-influencer',
    src: logout
  },

]
