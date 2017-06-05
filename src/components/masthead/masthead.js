import React, { Component } from 'react';
import './masthead.css';

class Masthead extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
            <ul className="navigation" role="navigation">
              <li>
                <a data-scroll-target="#about" href="#about" title="A brief introduction">ABOUT</a>
              </li>
              <li>
                <a data-scroll-target="#development" href="#development" title="go to my development skills">SKILLS</a>
              </li>                  
              <li>
                <a data-scroll-target="#design" href="#design" title="go to my favoured tools">TOOLS</a>
              </li>
              <li>   
                <a data-scroll-target="#contact" href="#contact" title="contact me on social channels">CONTACT</a>
              </li>
            </ul>
          <button type="button" className="btn btn-navbar" data-toggle="collapsed" data-target=".nav-collapse">
            Menu
          </button>            
        </div>
      </nav>
    );
  }
}

export default Masthead;
