import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx";
import Events from "./components/Calendar/Events.jsx";
import Contact from "./components/Contact/Contact.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faListUl, faLink, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faListUl, faLink, faMapMarkerAlt, faClock);

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
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/faq" component={FAQ}/>
            
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
