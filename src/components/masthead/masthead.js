import React, { Component } from 'react';
import './masthead.css';

class Masthead extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
            <ul className="navigation" role="navigation">
              <li>
                <a href="#about" title="A brief introduction">Intro</a>
              </li>
              <li>
                <a href="#development" title="go to my development skills">Skills</a>
              </li>                  
              <li>
                <a href="#design" title="go to my favoured tools">Profile</a>
              </li>
              <li>   
                <a href="#contact" title="contact me on social channels">Contact</a>
              </li>
            </ul>
            <button type="button" className="btn btn-navbar">
              Menu
            </button>
        </div>
      </nav>
    );
  }
}

export default Masthead;
