import React, { Component } from 'react';
import './scroll-button.css';

class ScrollButton extends Component {
  render() {
    return (
      <div className="scroll-button">
        <button 
          aria-label="click to scroll to the development section"
          className="icon-down_arrow scroll-button__button"
          href="{this.props.scrollTo}">
        </button>
      </div>
    );
  }
}

export default ScrollButton;
