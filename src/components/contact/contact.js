import React, { Component } from 'react';
import ScrollButton from '../scroll-button/scroll-button';
import logo from './boxdeluxe_footer.svg';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="section contact">
        <h2 className="section__main-title">Contact</h2>
        <div className="contact__container">
          <ul className="contact__media-list">
            <li className="contact__media-item">
              <a href="http://www.flickr.com/photos/boxdeluxe/" title="flickr" className="contact__item-link icon-flickr_icon"></a>
            </li>
            <li className="contact__media-item">
              <a href="https://twitter.com/boxdeluxe" title="twitter" className="contact__item-link icon-twitter_icon"></a>
            </li>
            <li className="contact__media-item">
              <a href="https://github.com/kojinkai" title="github" className="contact__item-link icon-github_icon"></a>
            </li>
            <li className="contact__media-item">
              <a href="http://www.linkedin.com/in/lewisnixon" title="linkedin" className="contact__item-link icon-linkedin_icon"></a>
            </li>
          </ul>
        </div>
        <footer className="contact__footer">
          <div>
            <img className="contact__footer-message" src={logo} alt="thanks for stopping by" />
          </div>
        </footer>        
      </section>
    );
  }
}

export default Contact;
