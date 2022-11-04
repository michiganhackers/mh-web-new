import React from "react";
import "../../utility/fonts.css";
import styled from "styled-components";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import { StaticP, StaticH1 } from "../../utility/ContentStyles.js";
import Sponsors from "./Sponsors.jsx";
import MailingList from "../MailingList/MailingList.jsx";

import Navbar from "../Navbar.jsx";

const EventList = styled.ul`
    list-style-type: none;
    margin: auto;
    padding: 0;
    font-size: 1.2em;
    text-align: center;
`;

const About = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="about us">
            <StaticH1>
                We&apos;re a tech oriented student organization at the University of Michigan
                seeking to foster a diverse community to build and grow relevant skills in a
                technological and fast-paced world.
            </StaticH1>
            <StaticP>
                We provide members high quality resources to become competent engineers by working on projects, holding corporate events, hosting networking opportunities, etc.
                Our primary form of member engagement is through our weekly hack nights where we split into our teams (such as Web, ML, iOS, etc) and work on domain-specific projects.
                Membership is open to everyone.
            </StaticP>
            <StaticP>
                Join our mailing list! You&apos;ll receive weekly updates
                from us detailing upcoming events, tech talks, hackathons,
                and news.
            </StaticP>
            <MailingList />
            <StaticH1>Our Events</StaticH1>
            <StaticP>
                Some events we&apos;ve had in the past or are planning for the
                future include:
            </StaticP>
            <EventList>
                <li>Weekly Hack Nights</li>
                <li>Company Events</li>
                <li>Organizing groups to attend hackathons</li>
                <li>Lightning Talks</li>
                <li>Cybersecurity Capture The Flag competitions</li>
                <li>Resume Critiques</li>
                <li>Interview Prep</li>
            </EventList>
            <Sponsors />
        </SubpageOuter>
    </React.Fragment>
);

export default About;
