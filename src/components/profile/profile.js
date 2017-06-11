import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <section className="profile section">
        <div className="content">
            <div className="profile__header">
              <h2 className="section__main-title profile__title">About Me</h2>
              <b className="icon-star_icon profile__icon"></b>
            </div>
            <div className="profile__messaging">
              <p className="profile__text">I&apos;m a London based Front End developer with over 8 years experience.</p>
              <p className="profile__text">I specialise in JavaScript application and responsive UI development. I draw upon a good deal of experience working within agile product teams at the intersection of design &amp; development.</p>
              <p className="profile__text">I have lots of experience with frameworks such as Angular, React and Express.js and yet I feel that good engineering practises remain paramount. Understanding the bigger pictures of scalability, modularity, testability and performance really helps you make the most of these tools.</p>                            
              <p className="profile__text">Producing progressive web apps that harness new technologies to deliver great customer experiences is my main motivation and a challenge that I relish.</p>
              <p className="profile__text">I use every project as an opportunity to learn new skills and I try to operate at the sharp edge of my expertise. I keep up to date with industry news and absorb all the best-practices I can find.</p>
              <p className="profile__text">I like to adopt a test-driven approach to development. I believe that this produces better software design and helps test your understanding of the requirements before diving into a feature.</p>
              <p className="profile__text">When done well, TDD helps with continous delivery efforts by closing feedback loops early and shortening release cycles and contributes to an enjoyable, high-performance working culture.</p>
              <p className="profile__text">I advocate integrating my work with downstream changes regularly and by keeping batch sizes small I aim to improve development agility and lessen the pain of root cause analysis if things go wrong.</p>
              <p className="profile__text">I really enjoy what I do and I&apos;m motivated by working with others who do too.</p>
            </div>
        </div>
      </section>
    );
  }
}

export default Profile;
