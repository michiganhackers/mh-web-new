import React from "react";
import "utility/fonts.css";
import styled from "styled-components";
import Sponsors from "./Sponsors.jsx";
import MailingList from "components/MailingList/MailingList.jsx";
import devices from "utility/MediaQueries.js";
import about_bg_2x1 from "assets/about_bg_2x1.svg";
import about_bg_2x1_mirror from "assets/about_bg_2x1_mirror.svg";
import about_bg_6x1 from "assets/about_bg_6x1.svg";
import about_bg_6x1_mirror from "assets/about_bg_6x1_mirror.svg";

import Navbar from "components/Navbar";
import ClubImagesCarousel from "components/ClubImagesCarousel.jsx";

const AboutColor1 = "#8dcadf";
const AboutColor2 = "#f38a63";

const MissionStatement = styled.article`
    width: 100%;
    color: white;
    // cap width
    // need 4:1 for desktops to ultrawides
    background-image: url(${about_bg_6x1});
    &:nth-of-type(even) {
        background-image: url(${about_bg_6x1_mirror});
    }
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 1.5rem;
    ${devices.tablet`
      background-image: url(${about_bg_2x1});
      &:nth-of-type(even) {
        background-image: url(${about_bg_2x1_mirror});
      }
    `}
    ${devices.small`
      background-image: none;
      background-color: ${AboutColor1};
      &:nth-of-type(even) {
        background-image: none;
        background-color: ${AboutColor2};
      }
    `}
`;

const TITLE_MARGIN_NORMAL = "3%";
const BODY_MARGIN_NORMAL = "5%";

const MissionWidthWrapper = styled.div`
    width: min(85%, 1444px);
    display: flex;
    flex-direction: column;
    margin: auto;
`;

/**
 * Display a title text. Flex position can be adjusted with the alignment parameter.
 *
 * @constructor
 * @param props.alignment {"start" | "end"} Flex alignment of the element
 */
const MissionTitle = styled.h2.attrs((props) => ({
    alignment: props.alignment || "left",
}))`
    font-family: "Roboto Condensed";
    font-weight: 900;
    line-height: 1;
    font-size: 2.5em;
    ${(props) =>
        props.alignment === "left"
            ? `align-self: start;
    margin-left: ${TITLE_MARGIN_NORMAL};`
            : `align-self: end;
    margin-right: ${TITLE_MARGIN_NORMAL};`}
    margin-bottom: 16px;
    padding-top: 16px;
`;

const MissionBody = styled.p.attrs((props) => ({
    alignment: props.alignment || "left",
}))`
    line-height: 1;
    font-size: 1.5em;
    ${(props) =>
        props.alignment === "left"
            ? `align-self: start;
    margin-left: ${BODY_MARGIN_NORMAL};`
            : `align-self: end;
    margin-right: ${BODY_MARGIN_NORMAL};`}
    width: min(60%, 600px);
    ${devices.tablet`
      width: min(75%, 600px);
    `}
    ${devices.small`
      width: 90%;
    `}
`;

const MailingListText = styled.p`
    color: black;
    text-align: center;
    font-weight: 500;
    font-size: 1.2em;
    padding: 1rem 0;

    margin: auto;
    width: min(60%, 600px);
    ${devices.tablet`
        width: min(80%, 600px);
    `}
    ${devices.small`
        width: min(90%, 600px);
    `}
`;

const About = () => (
    <>
        <Navbar />
        <MissionStatement>
            <MissionWidthWrapper>
                <MissionTitle>Who Are We?</MissionTitle>
                <MissionBody alignment="right">
                    We&apos;re a tech oriented student organization at the
                    University of Michigan seeking to foster a diverse community
                    to build and grow relevant skills in a technological and
                    fast-paced world.
                </MissionBody>
            </MissionWidthWrapper>
        </MissionStatement>

        <MissionStatement>
            <MissionWidthWrapper>
                <MissionTitle alignment="right">What Do We Do?</MissionTitle>
                <MissionBody>
                    We provide members high quality resources to become
                    competent engineers by working on projects, holding
                    corporate events, hosting networking opportunities, etc. Our
                    primary form of member engagement is through our weekly hack
                    nights where we split into our teams (such as Web, ML, iOS,
                    etc) and work on domain-specific projects. Membership is
                    open to everyone.
                </MissionBody>
            </MissionWidthWrapper>
        </MissionStatement>

        <MailingListText>
            Join our mailing list! You&apos;ll receive weekly updates from us
            detailing upcoming events, tech talks, hackathons, and news.
        </MailingListText>
        <MailingList />
        <ClubImagesCarousel />
        <Sponsors />
    </>
);

export default About;
