import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './masthead.css';

class Masthead extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
            <ul className="navigation" role="navigation">
              <li>
                <Link to="/">Intro</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="#contact" title="contact me on social channels">Profile</a>
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
