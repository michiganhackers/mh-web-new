import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx";
import Team from "./components/Team/Team.jsx";
import Events from "./components/Calendar/Events.jsx";
import Contact from "./components/Contact/Contact.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faListUl, faLink, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faListUl, faLink, faMapMarkerAlt, faClock);

const App = () => (
    <div>
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/events" component={Events} />
                <Route path="/about" component={About} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
                <Route path="/faq" component={FAQ} />
            </React.Fragment>
        </Router>
    </div>
);

export default App;
