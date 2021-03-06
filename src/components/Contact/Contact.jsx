import React from 'react';
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import { StaticP } from "../../utility/ContentStyles.js";
import MailingList from '../MailingList/MailingList.jsx';
import Navbar from '../Navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="contact">
            <StaticP>
                Feel free to ask any questions or connect with us through any of our social media platforms or email. Join our Slack, check out our calendar, and get our emails for the latest updates! Like our Facebook page to see event highlights, curated photos, and news!
            </StaticP>
            <StaticP>
                <a href="mailto:michiganhackers@umich.edu">michiganhackers@umich.edu</a>
            </StaticP>

            <StaticP>
                <a href="mailto:michiganhackers-exec@umich.edu">michiganhackers-exec@umich.edu</a>
            </StaticP>

            <StaticP>
                <a href="https://fb.com/michiganhackers" target="blank"><FontAwesomeIcon icon={[ "fab", "facebook" ]} /> Follow us on Facebook!</a>
            </StaticP>
            <StaticP>
                <a href="https://github.com/michiganhackers" target="blank"><FontAwesomeIcon icon={[ "fab", "github" ]} /> Check us out on GitHub!</a>
            </StaticP>
            <StaticP>
                <a href="https://twitter.com/michiganhackers" target="blank"><FontAwesomeIcon icon={[ "fab", "twitter" ]} /> Don&apos;t @ us on Twitter!</a>
            </StaticP>
            <StaticP>
                <a href="https://instagram.com/michiganhackers" target="blank"><FontAwesomeIcon icon={[ "fab", "instagram" ]} /> Check out recent pics of our club on Instagram!</a>
            </StaticP>
            <StaticP>
                <a href="https://bit.ly/slackmh" target="blank"><FontAwesomeIcon icon={[ "fab", "slack" ]} /> Join our Slack workspace!</a>
            </StaticP>
            <MailingList />
        </SubpageOuter>
    </React.Fragment>
);

export default Contact;
