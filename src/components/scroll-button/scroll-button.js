import React, { Component } from 'react';
import './scroll-button.css';

class ScrollButton extends Component {
  render() {
    return (
      <button 
        aria-label="click to scroll to the development section"
        className="icon-down_arrow scroll-button"
        href="{this.props.scrollTo}">
      </button>
    );
  }
}

export default ScrollButton;
