import React, { Component } from 'react';
import CalendarWrapper from './components/Calendar/CalendarWrapper.jsx';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faLink, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faListUl, faLink, faMapMarkerAlt, faClock);

/*
TODO: Add the components these routes map to
EX:             <Route path="/events" component={Calendar} />
after having imported the Calendar component
*/
// Make sure to use either <Navbar /> or <SpecialNavbar /> inside all routes
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            {/*<Navbar/>
            <Route exact path="/" component={Home}/>*/}
            <SpecialNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/events" component={CalendarWrapper}/>
            <Route path="/faq"/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
