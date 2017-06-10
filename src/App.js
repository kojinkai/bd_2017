import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Masthead from './components/masthead/masthead';
import Sidemenu from './components/sidemenu/sidemenu';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Profile from './components/profile/profile';
import Contact from './components/contact/contact';

class App extends Component {

  _getRouteColor(colorMap) {
    return (location) => {
      return colorMap[location];
    }
  }

  render() {

    const getRouteColorFromLocation = this._getRouteColor({
      intro: '#2e4066',
      skills: '#f05000',
      profile: '#2e4066',
      contact: '#9ca2ad'
    });

    return (
      <Router>
        <div className="page-wrap">
          <Route render={({ location }) => (
            <div>
              <Masthead />
              <Sidemenu pathname={location.pathname.substr(1)} routecolors={getRouteColorFromLocation}>
                <Route exact path="/" component={Intro} />
                <Route path="/skills" component={Skills} />
                <Route path="/profile" component={Profile} />
                <Route path="/contact" component={Contact} />
              </Sidemenu>
            </div>
            )}/>
        </div>
      </Router>
    );
  }
}

export default App;
