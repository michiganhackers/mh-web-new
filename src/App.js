import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Leadership from "./components/Leadership/Leadership";
import Events from "./components/Calendar/Events.jsx";
import Contact from "./components/Contact/Contact.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
    faListUl,
    faLink,
    faMapMarkerAlt,
    faClock,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "./utility/ScrollToTop";

library.add(fab, far, faListUl, faLink, faMapMarkerAlt, faClock, faBars);

const App = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/about" component={About} />
            <Route path="/leadership" component={Leadership} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={FAQ} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </Router>
);

export default App;
