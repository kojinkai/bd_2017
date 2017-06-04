import React, { Component } from 'react';
import logo from './boxdeluxe_logo.svg';
import './intro.css';

class Intro extends Component {
  render() {
    return (
    <section className="waypoint intro">
        <div className="content">
            <div className="intro__brand">
                <img className="intro__logo" src={logo} alt="box deluxe logo" />
                <b className="icon-star_icon intro__icon"></b>
            </div>
            <div className="intro__messaging">
              <p className="intro__text">
                  Hi, I’m Lewis Nixon, a Front End engineer and product developer.
                  <br />  
                  This is where you can find out a little bit more about what I do.
              </p>
              <p className="intro__text">
                  I believe that coding is a craft and true practitioners place a high premium on creating performant, scalable, standards-based code and snappy, intuitive interfaces.
              </p>
            </div>

            <a className="intro__more-link" href="/about" title="learn more about Lewis Nixon">Read More</a>
        </div>
        <a className="icon-down_arrow" href="#development" data-scroll-target="#development">Scroll Down</a>
    </section>
    );
  }
}

export default Intro;
