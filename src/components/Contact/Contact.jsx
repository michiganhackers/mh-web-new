import React from "react";
import "../../utility/fonts.css";
import Navbar from "../Navbar.jsx";
import styled from "styled-components";
import ForStudents from "./ForStudents";
import ForCompanies from "./ForCompanies";
import ContactLinks from "./ContactLinks";
import devices from '../../utility/MediaQueries.js';
import MailingList from "../MailingList/MailingList.jsx";

const Outer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    // height: calc(100vh - 80px);
    ${devices.tablet`
        display: flex;
        grid-template-columns: 1fr;
        flex-direction: column;
        width: 100vw;
    `}
`;

const ConnectWithUsOuter = styled.div`
    margin-top: 80px;
    ${devices.tablet`
        margin-top: 66px;
    `}
    background-color: rgba(89, 202, 241, 1);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ConnectWithUsHeader = styled.h1`
    color: white;
    text-align: center;
    font-weight: 700;
`;

const ConnectWithUsBody = styled.p`
    color: white;
    text-align: center;
    max-width: 30rem;
    font-weight: 500;
    font-size: 1.2em;
`;

// const Placeholder1 = styled.div`
//     background-color: blue
// `;

// const Placeholder2 = styled.div`
//     background-color: orange
// `;

const ForStudentsDiv = styled.div`
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0;
    ${devices.desktop`
        padding: 0 2rem;
    `}
    ${devices.tablet`
        order: 2;
        padding: 3rem;
    `}

`;

const ForCompaniesDiv = styled.div`
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0;
    ${devices.desktop`
        padding: 0 2rem;
    `}
    ${devices.tablet`
        order: 4;
        padding: 3rem;
    `}
`;

const InfoP = styled.p`
    font-size: 2.3rem;
    margin: 0;
    ${devices.massive`
        font-size: 1.7rem;
    `}
    ${devices.giant`
        font-size: 1.4rem;
    `}
    ${devices.desktop`
        font-size: 1.1rem;
    `}
    ${devices.tablet`
        font-size: 1rem
    `}
`;

const Contact = () => (
    <React.Fragment>
        <Navbar />
        <ConnectWithUsOuter>
            <ConnectWithUsHeader>
                Connect With Us
            </ConnectWithUsHeader>
            <ConnectWithUsBody>
                Follow Michigan Hackers on social media, and join our mailing list! You&apos;ll receive weekly updates from us detailing upcoming events, tech talks, hackathons, and news.
            </ConnectWithUsBody>
            <ContactLinks />
            <MailingList />
        </ConnectWithUsOuter>
        <Outer>
            <ForStudents />
            <ForStudentsDiv>
                <InfoP>
                    For students interested in participating with Michigan Hackers, join our Slack workspace and subscribe to our mailing list to stay in touch with upcoming hack nights, corporate events, and socials. For any questions, reach out at - <a href="mailto:michiganhackers-exec@umich.edu">michiganhackers&#8209;exec@umich.edu</a>
                </InfoP>
            </ForStudentsDiv>
            <ForCompaniesDiv>
                <InfoP>
                    Michigan Hackers is constantly looking to build mutually beneficial partnerships with companies. In the past, we have had events such as engineering panels, technical workshops, recruiting coffee chats, coding competitions with companies. For companies interested in sponsoring and collaborating with Michigan Hackers, please reach out at - <a href="mailto:michiganhackers-exec@umich.edu">michiganhackers&#8209;exec@umich.edu</a>
                </InfoP>
            </ForCompaniesDiv>
            <ForCompanies />
        </Outer>
    </React.Fragment>
);

export default Contact;
