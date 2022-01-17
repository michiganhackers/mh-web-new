import React from "react";
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Question from "./Question.jsx";

import Navbar from "../Navbar.jsx";

const FAQ = () => (
    <>
        <Navbar />
        <SubpageOuter header="frequently asked questions (faq)">
            <Question
                question="You guys hack?"
                answer="Yes, we hack things together! Hacking, to us, is the process of bringing together passion, creativity, and technical skills to build something new and learn more about technology."
            />
            <Question
                question="Can I join Michigan Hackers? How? What’s the process?"
                answer="Yes! Any student can come to our events and be a guest. You're welcome to check out our different teams and our company events. If you're interested in Michigan Hackers, consistent attendance (three consecutive events) will earn you an invitation to join officially."
            />
            <Question
                question="Can I join a team if I’m not an official member?"
                answer="Yes, you can! We do encourage everyone who is working on a project on a team in Michigan Hackers become an official member so that you can become more involved in the community."
            />
            <Question
                question="I’m new to computer science and programming! Can I still be involved?"
                answer="Yes, of course! We love students who are open and passionate about learning about code. We just ask that you are committed to putting in some time and effort to engage with our resources to help you gain technical skills, whether it be through our teams and members/leads with immense knowledge or the guides and talks they share."
            />
            <Question
                question="What are Michigan Hackers' teams?"
                answer="Our current roster of teams is: Security, Web, Android, iOS, Open-Source Development, Interviewing, Independent Hackers, Embedded Systems, Machine Learning, Marketing, Conversational AI, and Puzzles!"
            />
            <Question
                question="I'm interested in multiple teams. Can I be on more than one?"
                answer="You can be on as many teams as you can effectively participate in. For the vast majority of our members, that is one team, but some have been able to participate in two or more."
            />
            <Question
                question="How do I become an official member?"
                answer="Official membership is FREE and decided on a rolling basis. Application invites are sent out through email after attending half of the Hack nights (usually 5-6, be sure to fill out the attendance forms) or other events. After filling out your application, schedule an appointment in our executive team's office hours for a low stress interview to become an official member."
            />
            <Question
                question="What are Hack Nights? What do you do?"
                answer="Hack Nights, held every Thursday, are the very foundation of who we are. During these Hack Nights, students work within one of our teams, casually code, meet others, and just hangout get to know the people and the club. We often hold student lightning talks on technical topics and play music. We also sometimes hold fun theme nights like Halloween Night and provide food. Official membership requires regular attendance to hack nights, but we offer leniency too. Make sure you bring a laptop!"
            />
            <Question
                question="I have class during Hack Nights! How can I still be involved?"
                answer="Michigan Hackers Hack Nights have always been, and will likely remain on, Thursday nights at 7 pm. That said, you can still be involved by contributing to a team or attending our other events."
            />
            <Question
                question="What are Office Hours for?"
                answer="Office hours are primarily for students to finalize their official membership with an interview. You can also come to learn more or ask questions about Hackers, bond and get to know that executive board member, or just hang out! Swag orders and prizes from our events can also be picked up here."
            />
            <Question
                question="What are membership benefits? Responsibilities?"
                answer="Our members get to join our official website roster, company resume book, and have access to exclusive swag discounts and stickers! If you regularly attend our events and received an application or office hour invite, we highly recommend finalizing the membership process so that you can reap the benefits and distinguish the time and effort you’ve put in. With that, we have to be fair to people who demonstrate commitment by revoking membership from those who miss four Hack Nights in a row."
            />
            <Question
                question="I have an exam! Can I excuse my absence?"
                answer="We don't currently have an excused attendance policy, but our invitation requirements for prospective members are lenient enough that a new streak can be created quickly, and current members are allowed up to four consecutive absences as a buffer for these situations."
            />
            <Question
                question="What makes you guys different?"
                //newlines can be added by making it a js string and adding the \n escape character
                answer={
                    "We're dynamic. We're not afraid of shifting our focus if we need to and are constantly aiming to evolve to fit the needs of Michigan students interested in technology and computer science. That means we have plenty of social, professional, and technical resources for everyone to take advantage of!" +
                    "\nWe're inclusive. Any student (even those outside of EECS) can be involved in our club to further their skills and knowledge! Plus, we don't charge membership fees (we have sponsors for that), and we have room for everybody. We're here to build your confidence and skills no matter who you are or where you came from. We just want passion and motivation for our organization, our goals, our club, and coding." +
                    "\nOur reach. Sure, we have many companies that want to hold events with us and even pay us (Google, Facebook, Yelp, Capital One, Twitter, Grainger, Steven's Capital Management, to name a few). But we also go beyond that. We have contacts with other organizations outside of the university and even have an annual hackathon with Michigan State University's Spartan Hackers. Within the university, we work with other organizations like the amazing Girls in Electrical Engineering and Computer Science (GEECS) and faculty like our advisor, Professor Alex J. Halderman. We have over 3k people following our social media, making us the top computer science focused student organization on campus. We're not perfect, but we're willing to grow and learn from mistakes."
                }
            />
        </SubpageOuter>
    </>
);

export default FAQ;
