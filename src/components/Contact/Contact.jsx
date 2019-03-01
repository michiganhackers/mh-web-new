import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import MailingList from '../MailingList/MailingList.jsx'
import Navbar from '../Navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="contact">
          <StaticP>
          Feel free to ask any questions or connect with us through any of our social media platforms or email. Join our slack, check out our calendar (right above), and get our emails for the latest updates! Like our Facebook page to see event highlights, curated photos, and news :) You can find our most frequently asked questions here. 
          </StaticP>
          <StaticP>
          <a href="mailto:michiganhackers@umich.edu">michiganhackers@umich.edu</a>
          </StaticP>

          <StaticP>
          <a href="mailto:michiganhackers-exec@umich.edu">michiganhackers-exec@umich.edu</a>
          </StaticP>

          <StaticP>
            <a href="fb.com/michiganhackers"><FontAwesomeIcon icon={["fab", "facebook"]} /> Follow us on Facebook!</a>
          </StaticP>
          <StaticP>
            <a href="github.com/michiganhackers"><FontAwesomeIcon icon={["fab", "github"]} /> Check us out on GitHub!</a>
          </StaticP>
          <StaticP>
            <a href="github.com/michiganhackers"><FontAwesomeIcon icon={["fab", "twitter"]} /> Don't @ us on Twitter!</a>
          </StaticP>
          <StaticP>
            <a href="github.com/michiganhackers"><FontAwesomeIcon icon={["fab", "instagram"]} /> Check out recent pics of our club on Instagram!</a>
          </StaticP>
          <StaticP>
            <a href="github.com/michiganhackers"><FontAwesomeIcon icon={["fab", "slack"]} /> Join our Slack workspace!</a>
          </StaticP>
          <MailingList/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Contact;
