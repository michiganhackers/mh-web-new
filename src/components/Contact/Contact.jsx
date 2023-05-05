import React from "react";
import "utility/fonts.css";
import Navbar from "components/Navbar.jsx";
import styled, { useTheme } from "styled-components";
import ContactLinks from "components/Contact/ContactLinks";
import devices from "utility/MediaQueries.js";
import MailingList from "components/MailingList/MailingList.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";
import { ForStudents, ForCompanies } from "./ContactSVGBackgrounds.jsx";

const Outer = styled.div`
    background-color: ${(props) => props.theme.background};
    display: grid;
    grid-template-columns: 1fr 1fr;
    // height: calc(100vh - 80px);
    ${devices.tablet`
        display: flex;
        grid-template-columns: 1fr;
        flex-direction: column;
        width: 100%;
    `}
`;

const ConnectWithUsOuter = styled.div`
    background-color: ${(props) => props.theme.background};
    padding: 3rem;
    ${devices.tablet`
        padding: 3rem 1rem;
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ConnectWithUsHeader = styled.h1`
    color: ${(props) => props.theme.heading};
    text-align: center;
    font-weight: 700;
`;

const ConnectWithUsBody = styled.p`
    color: ${(props) => props.theme.text};
    text-align: center;
    font-weight: 500;
    font-size: 1.2em;

    width: min(60%, 600px);
    ${devices.tablet`
        width: min(80%, 600px);
    `}
    ${devices.small`
        width: min(90%, 600px);
    `}
`;

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

const ForCompaniesDiv = styled(ForStudentsDiv)`
    ${devices.tablet`
        order: 4;
    `}
`;

const InfoP = styled.p`
    color: ${(props) => props.theme.text};
    font-size: 1.7rem;
    margin: 0;
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

const StudentSVGContainer = styled.div`
    min-width: 50%;
    position: relative;
    ${devices.tablet`
        width: 100%;
        order: 1;
    `}
`;

const CompanySVGContainer = styled(StudentSVGContainer)`
    ${devices.tablet`
        order: 3;
    `}
`;
const SVGHeading = styled.p`
    position: absolute;
    top: 8px;
    ${(props) => props.alignment}: 24px;
    color: ${(props) => props.theme.heading};
    font-family: "Roboto Condensed";
    font-size: 4vw;
    font-weight: bold;
    user-select: none;
    ${devices.tablet`
        font-size: 8vw;
    `}
`;

function ForStudentsImage() {
    const { svg: svgTheme } = useTheme();
    return (
        <StudentSVGContainer>
            <img src={ForStudents(svgTheme)} alt="" />
            <SVGHeading alignment="right">For Students</SVGHeading>
        </StudentSVGContainer>
    );
}

function ForCompaniesImage() {
    const { svg: svgTheme } = useTheme();
    return (
        <CompanySVGContainer>
            <img src={ForCompanies(svgTheme)} alt="" />
            <SVGHeading alignment="left">For Companies</SVGHeading>
        </CompanySVGContainer>
    );
}

const Contact = () => (
    <>
        <Navbar />
        <SubTheme name="contact">
            <SubTheme name="links">
                <ConnectWithUsOuter>
                    <ConnectWithUsHeader>Connect With Us</ConnectWithUsHeader>
                    <ConnectWithUsBody>
                        Follow Michigan Hackers on social media!
                    </ConnectWithUsBody>
                    <ContactLinks />
                    <ConnectWithUsBody>
                        Join our mailing list! You&apos;ll receive weekly
                        updates from us detailing upcoming events, tech talks,
                        hackathons, and news.
                    </ConnectWithUsBody>
                    <SubTheme name="mailing">
                        <MailingList />
                    </SubTheme>
                </ConnectWithUsOuter>
            </SubTheme>
            <Outer>
                <SubTheme name="details">
                    <ForStudentsImage />
                    <ForStudentsDiv>
                        <InfoP>
                            For students interested in participating with
                            Michigan Hackers, join our Slack workspace and
                            subscribe to our mailing list to stay in touch with
                            upcoming hack nights, corporate events, and socials.
                            For any questions, reach out at -{" "}
                            <a href="mailto:michiganhackers-exec@umich.edu">
                                michiganhackers&#8209;exec@umich.edu
                            </a>
                        </InfoP>
                    </ForStudentsDiv>
                    <ForCompaniesDiv>
                        <InfoP>
                            Michigan Hackers is constantly looking to build
                            mutually beneficial partnerships with companies. In
                            the past, we have had events such as engineering
                            panels, technical workshops, recruiting coffee
                            chats, coding competitions with companies. For
                            companies interested in sponsoring and collaborating
                            with Michigan Hackers, please reach out at -{" "}
                            <a href="mailto:michiganhackers-exec@umich.edu">
                                michiganhackers&#8209;exec@umich.edu
                            </a>
                        </InfoP>
                    </ForCompaniesDiv>
                    <ForCompaniesImage />
                </SubTheme>
            </Outer>
        </SubTheme>
    </>
);

export default Contact;
