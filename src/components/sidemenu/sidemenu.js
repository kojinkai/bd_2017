import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuToggle from '../menu-toggle/menu-toggle';
import './sidemenu.css';

class Sidemenu extends Component {

  constructor() {
    super();

    this.state = {
      sidemenuIsOpen: false,
    };

    this.handleSidemenuToggle = this.handleSidemenuToggle.bind(this);
  }

  handleSidemenuToggle(open) {

    this.setState({
      sidemenuIsOpen: !this.state.sidemenuIsOpen
    });

  }

  render() {

    let viewPanelStyles = {
      transform: 'translateX(0%)',
      WebkitTransform: 'translateX(0%)'
    }

    if (this.state.sidemenuIsOpen) {
      viewPanelStyles = {
        transform: 'translateX(300px)',
        WebkitTransform: 'translateX(300px)'
      }
    }

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
        <div
          className="sidemenu__view" 
          style={viewPanelStyles}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onTouchCancel={this.handleTouchEnd}>

          <MenuToggle toggle={this.handleSidemenuToggle} active={this.state.sidemenuIsOpen}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sidemenu;
