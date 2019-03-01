import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import Question from "./Question.jsx"

import Navbar from '../Navbar.jsx';

const EventList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
`
class FAQ extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubpageOuter header="frequently asked questions (faq)">
          <Question question="You guys hack?" answer="Yes...we hack things...together ;) What we mean by “hacking” is mashing the old and the new together, which helps us learn more about the world and programming."/>
          <Question question="Can I join Michigan Hackers and how? What’s the process?" answer="Yes! Any student can come to our events and be a guest. While you are welcome to be involved as a guest, open clubs naturally have a problem with adding value without a membership process (i.e. you can arbitrarily join a bunch and declare yourself a member). Therefore, we also have an official process with other tiers to demonstrate passion and unlock extra benefits. Our membership structure is as follows:
Guest, Core Member, Core Lead, Executive Board"/>
          <Question question="Can I join a Core team if I’m not an official Core member?" answer="Yes, you can! Core teams and members are separate. We recommend not officially joining a project until you qualify for Core membership, since we want you to get a feel for our organization and stay committed."/>
          <Question question="I’m new to computer science and programming! Can I still be involved?" answer="No. Just kidding! We love students who are open and passionate about learning about code. We just ask that you are committed to putting in some time and effort to engage with our resources to help you gain technical skills, whether it be through our teams and members/leads with immense knowledge or the guides and talks they share.
On another note, we always need people on the Creative core team, which has amazing opportunities to get a handle on our large social media audience (larger than most on campus), graphic design, and photography. It’s awesome because you can make things that you physically see being worn, shared, and used around campus and the internet!"/>
          <Question question="How do I become an official Core Member?" answer="Official membership is FREE and decided on a rolling basis. Application invites are given through merit, such as coming to three hack nights in row (this number can be supplemented through other events where we track attendance). After filling out your application, you come to any convenient Executive office hour for a low stress interview to finish becoming official."/>
          <Question question="Why is the process to become a official core member so long?" answer="Being an organization for students and by students, we want you to ultimately get a feel for our culture and what we do so YOU can decide if you want to be official; this can only be done by coming to our events. Plus, we want to learn more about you, your needs, and your commitment, so our application and office hour interview is a great way to gauge that."/>
          <Question question="What are Hack Nights? What do you do?" answer="Hack Nights, held every Thursday, is the very foundation of who we are. During these Hack Nights, students can work within a core team, casually code, meet others, and just hangout get to know the people and the club. We often hold student lightning talks on technical topics and play music. We also sometimes hold fun theme nights like Halloween Night and provide food. Core invites and attendance requires regularly going to these and not missing a reasonable amount. Make sure you bring a laptop!"/>
          <Question question="I have class during Hack Nights! How can I still be involved?" answer="Michigan Hackers Hack Nights has always been, and will likely remain on, Thursday nights at 7. Please keep that in mind when scheduling because we likely won’t change that! Otherwise, you can still be involved by contributing to a team by contacting that team leader or maybe just coming for the other events we hold."/>
          <Question question="What are Office Hours for?" answer="Office hours are primarily for students to finalize their Core Membership with an interview or to excuse non extenuating absences. You can also come to learn more or ask questions about Hackers, bond and get to know that executive board member, or just hangout! Swag orders and prizes from our events can also be picked up from here."/>
          <Question question="What are Core Member benefits? Responsibilities?" answer="Core Members get to join our official website roster, company resume book, Core Meetings, and have access to exclusive swag discounts and stickers :) If you regularly attend our events and received an application or office hour invite, we highly recommend finalizing the official Core Member process so that you can reap the benefits and distinguish the time and effort you’ve put in. With that, we have to be fair to people who demonstrate commitment by revoking membership from those who miss three Hack Nights in a row unexcused or freeriders."/>
          <Question question="Help! I’m not an official member and don’t want to lose my attendance streak! (or I’m a Core Member and don’t want to add to my absence streak!)" answer="If you’re absence is due to extenuating circumstances (defined as emergency (with some proof), debilitating or contagious sickness, physical exam), you can fill out absence form at bit.ly/mh-gone. You can also be excused from a Hack Night for other reasons if you either create a plan with a Core Lead or go to an office hour for Michigan Hackers related work."/>
          <Question question="What are Core Meetings?" answer="Core Meetings are closed to Core Members, Core Leads, and Executive Board Members, where we meet 30 minutes before Hack Nights to go over updates, make decisions, and discuss topics within Hackers to help improve and tailor to member needs. We also do some small bonding activities to get to know each other better."/>
          <Question question="Can I join a project without being on core?" answer="Yes! Locate a core team and talk to a lead for that teams specific details."/>
          <Question question="What are the Core Team Projects?" answer="Each team has their own specific project, which is focused around the area the team is named after. We have teams that work on coding projects (iOS, Android, React Native, Web), putting together events (Security, Data Structures & Interviews), and overall skill building and resources (Creative, Data Structures & Interviews). Each type of and specific team have their own pros and cons that you can explore. In essence, each is valuable in teaching you how to collaborate with others and get you familiar with many tasks software developers face (reading documentation, building on top of other people's code, setting up programming environments, etc)."/>
          <Question question="What makes you guys different?" answer="We're dynamic. We're not afraid of shifting our focus if we need to and are constantly aiming to evolve to fit the needs of Michigan students interested in technology and computer science. That means we have plenty of social, professional, and technical resources for everyone to take advantage of! Furthermore, we're always open to adding more Core teams and roles to help fulfill that goal.
Inclusive. Any student majoring in anything can be involved in our club to further their skills and knowledge! Plus, we don't charge you dumb membership fees (we got $pon$or$ for that), and have room for everybody. We won't reject you and judge you on your personality or appearance; we're here to build your confidence and skills no matter who you are or where you came from. We just want raw, unadulterated passion and motivation for others in our organization, our goals, our club, and coding.
Reach. Sure, we have many companies that want to hold events with us and even pay us (Google, Facebook, Yelp, Capital One, Twitter, Grainger, Steven's Capital Management, all in 2018 alone). Yet, we also go beyond that. We have contacts to other organizations outside of the university and even have an annual hackathon with Michigan State University's Spartan Hackers. Within the university, we work with others like the amazing Girls in Electrical leEngineering and Computer Science (GEECS) and faculty like our advisor, Professor Alex J. Halderman.
We have over 3k people following our social media, making us the top computer science focused student organization on campus (feel free to correct us if we're wrong). We're not perfect, but we're willing to grow and learn from mistakes.
"/>
        </SubpageOuter>
      </React.Fragment>
    );
  }
}

export default FAQ;
