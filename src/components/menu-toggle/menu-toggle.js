import React, { Component } from 'react';
import './menu-toggle.css';

class MenuToggle extends Component {
  
  handleClick() {
    console.log('foo menu toggle');
  }

  render() {
    return (
      <button className="menu-toggle" onClick={this.props.toggle}>
        <b className="menu-toggle__icon icon-list2"></b>
      </button>
    );
  }
}

export default MenuToggle;
