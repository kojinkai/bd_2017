import React, { Component } from 'react';
import './page-link.css';

class Button extends Component {
  render() {
    return (
      <a className="page-link">{this.props.text}</a>
    );
  }
}

export default Button;
