import React, { Component } from 'react';
import logo from './boxdeluxe_footer.svg';
import './contact.css';

class Contact extends Component {
  
  constructor() {
    super();
    this.state = {
      contactItems: [
        {
          title: 'flickr',
          className: 'icon-flickr_icon',
          url: 'http://www.flickr.com/photos/boxdeluxe/'
        },
        {
          title: 'twitter',
          className: 'icon-twitter_icon',
          url: 'https://twitter.com/boxdeluxe'
        },
        {
          title: 'github',
          className: 'icon-github_icon',
          url: 'https://github.com/kojinkai'
        },
        {
          title: 'linkedin',
          className: 'icon-linkedin_icon',
          url: 'http://www.linkedin.com/in/lewisnixon'
        }
      ]
    }
  }

  render() {

    const contactLinks = this.state.contactItems.map(item => {
      return (
        <li className="contact__media-item">
          <a href={item.url} title={item.title}>
            <b className={item.className + ' contact__item-link'}></b>
          </a>
        </li>
      );
    });

    return (
      <section className="section contact">
        <h2 className="section__main-title">Contact</h2>
        <div className="contact__container">
          <ul className="contact__media-list">
            {contactLinks}
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
