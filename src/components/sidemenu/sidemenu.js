import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import MenuToggle from '../menu-toggle/menu-toggle';
import './sidemenu.css';

class Sidemenu extends Component {

  constructor() {
    super();

    this.state = {
      sidemenuIsOpen: false,
      styles: {
        viewPanel: {
          transform: 'translateX(0%)',
          WebkitTransform: 'translateX(0%)',
        }
      }
    };

    this.handleSidemenuToggle = this.handleSidemenuToggle.bind(this);
  }

  handleSidemenuToggle(open) {
    const transitionAmount = this.state.sidemenuIsOpen ? '0px' : '300px';

    this.setState({
      sidemenuIsOpen: !this.state.sidemenuIsOpen,
      styles: {
        viewPanel: {
          transform: `translateX(${transitionAmount})`,
          WebkitTransform: `translateX(${transitionAmount})`
        }
      }
    });

  }

  render() {

    return (
      <div className="sidemenu">
        <nav className="sidemenu">
          <ul className="sidemenu__list" role="navigation">
            <li className="sidemenu__item">
              <Link to="/" onClick={this.handleSidemenuToggle}>
                Intro
                <b className="sidemenu__icon icon-quotes-left"></b>
              </Link>
            </li>
            <li className="sidemenu__item">
              <Link to="/skills" onClick={this.handleSidemenuToggle}>
                Skills
                <b className="sidemenu__icon icon-magic-wand"></b>                
              </Link>
            </li>                  
            <li className="sidemenu__item">
              <Link to="/profile" onClick={this.handleSidemenuToggle}>
                Profile
                <b className="sidemenu__icon icon-profile"></b> 
              </Link>
            </li>
            <li className="sidemenu__item">   
              <Link to="/contact" onClick={this.handleSidemenuToggle}>
                Contact
                <b className="sidemenu__icon icon-phone"></b>                
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidemenu__view" style={this.state.styles.viewPanel}>
          <MenuToggle toggle={this.handleSidemenuToggle}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sidemenu;
