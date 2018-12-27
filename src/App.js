import React, { Component } from 'react';
import CalendarWrapper from './components/Calendar/CalendarWrapper.jsx';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import Contact from "./components/Contact/Contact.jsx";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faLink, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faListUl, faLink, faMapMarkerAlt, faClock);

/*
TODO: Add the components these routes map to
EX:             <Route path="/events" component={Calendar} />
after having imported the Calendar component
<Calendar style={CalendarStyle}></Calendar>
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
            <Route path="/faq" component={Faq}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
