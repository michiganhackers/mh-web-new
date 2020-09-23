import React from 'react';
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import { StaticP, StaticH1 } from "../../utility/ContentStyles.js";
import Sponsors from "./Sponsors.jsx";
import MailingList from "../MailingList/MailingList.jsx";

import Navbar from '../Navbar.jsx';

const EventList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
`;

const About = () => (
    <React.Fragment>
        <Navbar />
        <SubpageOuter header="about us">
            <StaticH1>
                We&apos;re a student organization at University of Michigan seeking to foster a diverse community to build and grow relevant skills in a technological and fast-paced world.
            </StaticH1>
            <StaticP>
                Our end goal is to provide high quality resources for all students to become more competent technologists (technically, socially, and professionally). While connecting students to projects, skills, faculty, companies, and more, we hope to make a large university feel smaller and forge lifelong bonds in an inclusive environment.
            </StaticP>
            <MailingList />
            <StaticH1>
                Our Events
            </StaticH1>
            <StaticP>
                Some events we&apos;ve had in the past or are planning for the future include:
                <EventList>
                    <li>Weekly Hack Nights</li>
                    <li>Company Events</li>
                    <li>Organizing groups to attend hackathons</li>
                    <li>Lightning Talks</li>
                    <li>Cybersecurity Capture The Flag competitions</li>
                    <li>Resume Critiques</li>
                    <li>Interview Prep</li>
                </EventList>
            </StaticP>
            <StaticH1>
                Other Relevant Links
            </StaticH1>
            <StaticP>
                Look at the following links to get a feel of our culture, our organizational structure, event vibes, how our teams work, how to get involved, access to free resources, and more.
                <EventList>
                    <li><a href="https://docs.google.com/presentation/d/122LR6C2yGpHYKe4mKHWFF98y6F8sV9Jh0dLnogiKnug/edit?usp=sharing">Our Mass Meeting Slides</a></li>
                    <li><a href="https://docs.google.com/presentation/d/1cihP20nwMc4rEwrapCwK8tumh5eUCUIdshGuB9-QoPY/edit">Our Teams</a></li>
                    <li><a href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUZvRjlEM0RMUlZ2fGRlZmF1bHR8NjkzODc3M2I3MDJlZGM5NDQyZDU2M2IzMzc4YTM2NjY">Office hours sign-up</a></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/13t39d5ou1FGmapBw2CxUsuo6OLtLENmbVQpotNGtCxM/edit#gid=0">Drop your LinkedIn</a></li>
                    <li><a href="https://docs.google.com/document/d/1wchq66lN9bDLcSSAxPEamBQYqBjUVjfJgcd9NqBc704/edit">Some CS Resources</a></li>
                </EventList>
            </StaticP>
            <Sponsors />
        </SubpageOuter>
    </React.Fragment>
);

export default About;
