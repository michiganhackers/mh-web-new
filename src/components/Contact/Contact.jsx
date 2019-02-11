import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import MailingList from '../MailingList/MailingList.jsx'
import Navbar from '../Navbar.jsx';

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
          <MailingList/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default Contact;
