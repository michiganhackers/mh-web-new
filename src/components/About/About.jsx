import React from "react";
import "utility/fonts.css";
import styled, { useTheme } from "styled-components";
import Sponsors from "./Sponsors.jsx";
import MailingList from "components/MailingList/MailingList.jsx";
import devices from "utility/MediaQueries.js";
import Navbar from "components/Navbar.jsx";
import ClubImagesCarousel from "components/ClubImagesCarousel.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";
import { Background2x1, Background6x1 } from "./AboutSVGBackgrounds.jsx";

const AboutWrapper = styled.main`
    width: 100%;
    background-color: ${(props) => props.theme.background};
`;

const MissionStatementElement = styled.article`
    width: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 1.5rem;
    background-image: url(${(props) => props.image6x1});

    ${devices.tablet`
      background-image: url(${(props) => props.image2x1});
    `}

    ${devices.small`
      background-image: none;
      background-color: ${(props) => props.theme.background};
    `}
    
    &:nth-of-type(even) {
        ${devices.small`
            background-image: none;
            background-color: ${(props) => props.theme.backgroundAlt};
        `}
    }
`;

function MissionStatement({ children, isMirrored = false }) {
    const { svg: svgTheme } = useTheme();
    return isMirrored ? (
        <MissionStatementElement
            image2x1={Background2x1(svgTheme)}
            image6x1={Background6x1(svgTheme)}
        >
            {children}
        </MissionStatementElement>
    ) : (
        <MissionStatementElement
            image2x1={Background2x1(svgTheme, true)}
            image6x1={Background6x1(svgTheme, true)}
        >
            {children}
        </MissionStatementElement>
    );
}

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
    color: ${(props) => props.theme.heading};
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
    color: ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
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
        <SubTheme name={"about"}>
            <AboutWrapper>
                <SubTheme name={"mission"}>
                    <MissionStatement isMirrored={true}>
                        <MissionWidthWrapper>
                            <MissionTitle>Who Are We?</MissionTitle>
                            <MissionBody alignment="right">
                                We&apos;re a tech oriented student organization
                                at the University of Michigan seeking to foster
                                a diverse community to build and grow relevant
                                skills in a technological and fast-paced world.
                            </MissionBody>
                        </MissionWidthWrapper>
                    </MissionStatement>

                    <MissionStatement>
                        <MissionWidthWrapper>
                            <MissionTitle alignment="right">
                                What Do We Do?
                            </MissionTitle>
                            <MissionBody>
                                We provide members high quality resources to
                                become competent engineers by working on
                                projects, holding corporate events, hosting
                                networking opportunities, etc. Our primary form
                                of member engagement is through our weekly hack
                                nights where we split into our teams (such as
                                Web, ML, iOS, etc) and work on domain-specific
                                projects. Membership is open to everyone.
                            </MissionBody>
                        </MissionWidthWrapper>
                    </MissionStatement>
                </SubTheme>
                <MailingListText>
                    Join our mailing list! You&apos;ll receive weekly updates
                    from us detailing upcoming events, tech talks, hackathons,
                    and news.
                </MailingListText>
                <MailingList />
                <ClubImagesCarousel />
                <Sponsors />
            </AboutWrapper>
        </SubTheme>
    </>
);

export default About;
