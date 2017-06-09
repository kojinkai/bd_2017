import React, { Component } from 'react';
import './menu-toggle.css';

class MenuToggle extends Component {

  render() {

    const classList = [
      'menu-toggle__icon'
    ];

    if (this.props.active) {
      classList.push('active');
    }

    return (
      <div className="menu-toggle">
        <button className="menu-toggle__button" onClick={this.props.toggle}>
          <span className={classList.join(' ')}></span>
        </button>
      </div>
    );
  }
}

export default MenuToggle;
