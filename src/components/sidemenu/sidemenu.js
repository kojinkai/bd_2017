import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidemenu.css';

class Sidemenu extends Component {
  render() {
    return (
      <nav className="sidemenu section">
        <ul className="sidemenu__list" role="navigation">
          <li className="sidemenu__item">
            <Link to="/">
              Intro
              <b className="sidemenu__icon icon-quotes-left"></b>
            </Link>
          </li>
          <li className="sidemenu__item">
            <Link to="/skills">
              Skills
              <b className="sidemenu__icon icon-magic-wand"></b>                
            </Link>
          </li>                  
          <li className="sidemenu__item">
            <Link to="/profile">
              Profile
              <b className="sidemenu__icon icon-profile"></b> 
            </Link>
          </li>
          <li className="sidemenu__item">   
            <Link to="/contact">
              Contact
              <b className="sidemenu__icon icon-phone"></b>                
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidemenu;
