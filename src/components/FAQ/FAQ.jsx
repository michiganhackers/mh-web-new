import React from "react";
import "utility/fonts.css";
import SubpageOuter from "components/SubpageOuter/SubpageOuter.jsx";
import Question from "components/FAQ/Question.jsx";
import Navbar from "components/Navbar.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";
import Footer from "components/Footer.jsx";

const FAQ = () => (
    <>
        <Navbar />
        <SubTheme name="faq">
            <SubpageOuter header="frequently asked questions">
                <br />
                <SubTheme name="question">
                    <Question
                        question="You guys hack?"
                        answer="Yes, we hack things together! Hacking, to us, is the process of bringing together passion, creativity, and technical skills to build fun, new projects and learn more about technology."
                    />
                    <Question
                        question="Can I join Michigan Hackers? How? What’s the process?"
                        answer="Yes! Our club has an open membership policy so anyone can attend events. We have our hack nights (weekly meetings) every Thursday at 7 pm on North Campus. So just show up! As of W23, we meet at DOW 1013."
                    />
                    <Question
                        question="How big is the club?"
                        answer="Every semester, we see a cohort of around 150 members. We have over 4k people on our mailing list, and we are by far the largest tech-focused club on campus."
                    />
                    <Question
                        question="What is a core member? How do I become one?"
                        answer="A core member is someone who has shown commitment to Michigan Hackers by consistently attending meetings and contributing to the hackers community. As of W23, in order to become eligible for core membership, you need 7 attendance points. Hack nights are 1 attendance point and all other events are 0.5 attendance points. After hitting the requirement, you will participate in a group coffee chat with an exec member. Additionally, to retain your core membership status for F23, you need at least 5 attendance points in W23."
                    />
                    <Question
                        question="What are the perks of being a core member?"
                        answer="As a core member, you will have the opportunity to upload your resume to the Michigan Hackers resume book, that is sent out to our corporate sponsors. Additionally, there are social, corporate, and networking events that are only open for core members."
                    />
                    <Question
                        question="I’m new to computer science and programming! Can I still be involved?"
                        answer="Of course! We love students who are open and passionate about learning about code. We just ask that you are committed to putting in some time and effort to engage with our resources, whether it be through our teams, immensely knowledgeable members/leads, or the guides and talks they share. They’re all here to help you learn!"
                    />
                    <Question
                        question="What are Michigan Hackers' teams?"
                        answer={
                            "Our current roster includes 10 core teams: Security, Web, Android, iOS, Open-Source Development, Interviewing, Embedded Systems, Machine Learning, Quant, and Systems Design.\nAdditionally, we have teams that meet outside our Thursday hack nights: Website, Design, and Internal Tooling."
                        }
                    />
                    <Question
                        question="I'm interested in multiple teams. Can I be on more than one?"
                        answer="You can be on as many teams as you can effectively participate in. However, it is generally recommended to stick to one team per semester. Furthermore, the resources of each team are publicly available."
                    />
                    <Question
                        question="I have class during Hack Nights! How can I still be involved?"
                        answer="Michigan Hackers Hack Nights have always been, and will likely remain on, Thursday nights at 7 pm. That being said, you can still be involved by attending our other events."
                    />
                    <Question
                        question="What makes you guys different?"
                        //newlines can be added by making it a js string and adding the \n escape character
                        answer={
                            "We're dynamic. We're not afraid of shifting our focus if we need to and are constantly aiming to evolve to fit the needs of Michigan students interested in technology and computer science. That means we have plenty of social, professional, and technical resources for everyone to take advantage of!" +
                            "\nWe're inclusive. Any student (even those outside of EECS) can be involved in our club to further their skills and knowledge! Plus, we don't charge membership fees (we have sponsors for that), and we have room for everybody. We're here to build your confidence and skills no matter who you are or where you came from. We just want passion and motivation for our organization, our goals, our club, and coding." +
                            "\nOur reach. Sure, we have many companies that want to hold events with us and even pay us (Crowdstrike, Grainger, Meta, Oracle, Google, Capital One, to name a few). But we also go beyond that. We have contacts with other organizations outside of the university such as Michigan State University's Spartan Hackers. Within the university, we work with other organizations like the amazing Girls in Electrical Engineering and Computer Science (GEECS), and faculty such as Professor Alex J. Halderman, Professor Jonathan Beaumont. We’re the top computer science focused student organization on campus." +
                            "\nAlso we're not perfect, but we're willing to grow and learn from mistakes."
                        }
                    />
                    <br />
                </SubTheme>
            </SubpageOuter>
        </SubTheme>
<Footer />
    </>
);

export default FAQ;
