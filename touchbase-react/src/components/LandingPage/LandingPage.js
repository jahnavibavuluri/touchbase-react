import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import './LandingPage.css';

import number_one from '../../images/LandingPage/1.png'
import number_two from '../../images/LandingPage/2.png'
import number_three from '../../images/LandingPage/3.png'
import img1 from '../../images/LandingPage/touchbase_img_Q&A.png'
import img2 from '../../images/LandingPage/touchbase_img_touchbases.png'
import img3 from '../../images/LandingPage/touchbase_img_dms.png'
import logo from '../../images/TouchbaseIcons/touchbase_logo.png'
import graphic from '../../images/LandingPage/landing-page-main-icon1.png'
import graphic2 from '../../images/LandingPage/graphic_1.png'
import graphic3 from '../../images/LandingPage/icon3.png'
import stepOne from '../../images/LandingPage/search.png'
import stepTwo from '../../images/LandingPage/calendar.png'
import stepThree from '../../images/LandingPage/video.png'
//import graphic from '../../images/LandingPage/icon3.jpg'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import NavbarUser from '../NavBar/NavbarUser.js'
import placeholder from '../../images/ProfilePics/profile-placeholder.png'


export const LandingPage = () => {
  const history = useHistory();

  const handleExplore = () => {
    history.push("/explore");
  };

  //Styling for the heading
  var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        /*var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);*/
    };

    const [influencers, setInfluencers] = useState({});

    useEffect(() => {
      fetch('/featured')
      .then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then((res, data) => {
        console.log(res[1].data);
        setInfluencers(res[1].data)
      })
      .catch(error => {
        console.error(error);
        return {name: "network error", description:""};
      });
    }, [])



  return (
    <div className="landingPage">
      <Navbar />

      <div className="landing-page-header">



          <h1 className="typewrite">
            Meet your favorite
            <a href="" class="typewrite" data-period="2000" data-type=' [ " pros", " experts", " designers", " artists", " influencers" ]'>
              <span class="wrap"></span>
            </a>
          </h1>
          <div className='sub-heading'>
            Your questions. Their personalized advice, consulting, and insights. (And for a worthy cause.)
          </div>
          <div className="nav-button">
            <button className="go-to-explore-button" onClick={handleExplore} type="button">Explore</button>
          </div>

        <div className="nav-right-side">
          <img className="landing-page-graphic" src={graphic} />
        </div>
        {/**/}

      </div>


      <div className="landing-page-featured-list">
        <div className="heading">
          Check out some of our featured pros
        </div>
        <div className="featured-list">

            {Object.entries(influencers).map( ([key, value]) => {
              return (
                <div className="list-item">
                  <a className="pro" key={key} href= {"/seller/" + value.id}>
                    {/*<img src={placeholder} width="200" className="pro-image"/>*/}
                    <div className="pro-name">
                      {value.firstName} {value.lastName}
                    </div>
                    <div className="pro-category">
                      <div>{value.categories[0]}</div>
                      <div>{value.categories[1]}</div>
                      <div>{value.categories[2]}</div>
                    </div>
                  </a>
                </div>
              )
            })}

        </div>
      </div>

      <div className="how-it-works">
        <div className="heading">
          How it works
        </div>
        <div className="cards">
          <div className="one">
            <img className="search" src={stepOne} />
            <div className="text">
              Search among our many experts and influencers and find the ones who fit your needs.
            </div>
          </div>
          <div className="two">
            <img className="calendar" src={stepTwo} />
            <div className="text">
              Our user friendly platform makes it effortless for you to book a touch base at your preferred date and time.
            </div>
          </div>
          <div className="three">
            <img className="video" src={stepThree} />
            <div className="text">
              Join your touch base at the scheduled time via our reliable, safe, and fast platform and get the personalized advice you need!
            </div>
          </div>
        </div>
      </div>


      <div className="content-panel-one">
        <div className="content-panel-one-responsive">
          <div className="content-panel-one-image">
            <img src={graphic2} className="why-touchbase-img1" ></img>
            <img src={graphic3} className="why-touchbase-img2" ></img>
          </div>
          <div className="content-panel-one-text">
            <div className="why-touchbase">
              Why Touchbase?
            </div>
            <div className="why-touchbase-header">
              Access to top industry pros, influences, and creators
            </div>
            <div className="why-touchbase-answer">
              Get personalized help and advice - from people that you already know, trust,
              and follow. Whether it's personal or for business, our experts are excited to chat.
            </div>
          </div>
        </div>
      </div>

      {/*<div className="content-panel-four">
        <div className="content-panel-four-responsive">
          <div className="how-it-works">
            How it works
          </div>
          <div className="block-content">
            <div className="block-one">
              <img src={number_one} className="number_one"></img>
              <div className="block-one-text">
                Search among our many experts and influencers and find the ones who fit your needs.
              </div>
            </div>
            <div className="block-two">
              <img src={number_two} className="number_two"></img>
              <div className="block-two-text">
                Our user friendly platform makes it effortless for you to book a touch base at your preferred date and time.
              </div>
            </div>
            <div className="block-three">
              <img src={number_three} className="number_three"></img>
              <div className="block-three-text">
                Join your touch base at the scheduled time via our reliable, safe, and fast platform and get the personalized advice you need!
              </div>
            </div>
          </div>
        </div>
      </div>*/}


      <div className="content-panel-two">
        <div className="content-panel-two-responsive">
          <div className="content-panel-two-image">
            <img src={img2} className="img2" ></img>
          </div>
          <div className="content-panel-two-text">
            <div className="types-of-touchbases">
              Types of Touchbases
            </div>
            <div className="types-of-touchbases-header">
              New ways to engage
            </div>
            <div className="types-of-touchbases-answers">
              It's not just for advice. Choose from a variety of offerings that let you engage
              with your favorite leaders and influencers.
            </div>
          </div>
        </div>
      </div>

      {/*<div className="content-panel-three">
        <div className="content-panel-three-responsive">
          <div className="content-panel-three-image">
            <img src={img3} className = "img3"></img>
          </div>
          <div className="content-panel-three-text">
            <div className="all-categories">
              All Categories
            </div>
            <div className="all-categories-header">
              Something for everyone
            </div>
            <div className="all-categories-answer">
              Forget the days of cold calls and unanswered DMs. Get answers to your
              questions across all lifestyle and business categories, directly from
              the people you admire.
            </div>
          </div>
        </div>
      </div>*/}
      <Footer />
    </div>
  );
}
