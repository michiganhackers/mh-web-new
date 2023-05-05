import React, { useRef, useEffect, useState } from "react";
import "utility/fonts.css";
import Navbar from "components/Navbar.jsx";
import styled from "styled-components";
import teams from "teams.json";
import SubteamCard from "components/Teams/SubteamCard.jsx";
import devices from "utility/MediaQueries.js";
import BackToTop from "./BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubTheme } from "components/ThemeComponents.jsx";
import Footer from "components/Footer.jsx";

const SubteamCardsDiv = styled.div`
    padding: 0 2rem;
`;

const SidebarWrapper = styled.div`
    z-index: 9;
    box-shadow: 0px 9.38461px 93.8461px rgba(0, 0, 0, 0.15);
    background-color: ${(props) => props.theme.background};
    position: fixed;
    left: 0;
    transition: left 0.25s;
    ${(props) => props.collapse && "left: calc(-300px + 1.5rem);"}
    height: 100%;
    display: block;
    top: 80px;
    padding: 1rem 1.5em 1rem;
    ${devices.tablet`
        top: 74px;
    `}
    overflow-y: auto;
    overflow-x: visible;
    width: 300px;
    ${devices.desktop`
        width: 100%;
        position: static;
        box-shadow: none;
        padding: 1rem;
    `}
`;

const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.link};
    padding: 1rem;
    width: 100%;
    border-radius: 10px;
    transition: background-color 0.25s;
    &:hover {
        color: ${(props) => props.theme.linkHover};
        background-color: ${props => props.theme.linkBackground};
        text-decoration: none;
    }
    &:nth-child(odd):hover {
        background-color: ${props => props.theme.linkBackgroundAlt};
    }
`;

const SubteamsTitle = styled.h1`
    text-align: center;
    margin: 1rem 0 0;
    color: ${(props) => props.theme.heading};
    ${devices.desktop`
        margin: 1rem 0;
    `}
`;

const ToggleText = styled.p`
    color: ${(props) => props.theme.heading};
    font-weight: bold;
    font-size: 1.5rem;
    display: block;
    margin: 0;
`;

const ToggleIcon = styled.span`
    font-size: 2rem;
    display: block;
    width: 1rem;
    margin-right: 1rem;
`;

const ToggleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const TeamIcon = styled.div`
    color: ${props => props.theme.icon};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
`;

const CollapseContainer = styled.div`
    z-index: 10;
    position: fixed;
    left: calc(300px - 1.25rem);
    transition: left 0.25s;
    ${(props) => props.sidebarOpen && "left: 0.25rem;"}
    top: 100px;
`;

const CollapseIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.theme.collapseBackground};
    color: ${props => props.theme.collapse};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.25s;
    &:hover {
        cursor: pointer;
    }

    ${(props) => props.sidebarOpen && "transform: rotate(180deg);"}
`;

const useIsMobile = () => {
    const getIsMobile = () => window.innerWidth <= 992;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return isMobile;
};

const Teams = () => {
    const teamNames = teams.map((team) => team.name);
    const teamIcons = teams.map((team) => team.icon);
    const teamIds = teamNames.map((name) =>
        name.replaceAll(" ", "_").toLowerCase()
    );
    const cardsRef = useRef([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, teams.length);
        if (
            window.location.hash !== "" &&
            document.querySelector(window.location.hash)
        ) {
            window.history.scrollRestoration = "manual";
            // have to wait for all images to load before we can calculate how far to scroll
            Promise.all(
                Array.from(document.images)
                    .filter((img) => !img.complete)
                    .map(
                        (img) =>
                            new Promise((resolve) => {
                                img.onload = img.onerror = resolve;
                            })
                    )
            ).then(() => {
                const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
                const onerem = parseFloat(
                    window.getComputedStyle(document.documentElement).fontSize
                );
                const padding = 1 * onerem;
                const yOffset = -(navbarHeight + padding);
                const element = document.querySelector(window.location.hash);
                const y =
                    element.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset;
                window.scrollTo({ top: y, behavior: "instant" });
            });
        }
    }, []);

    const handleClick = (e, i) => {
        e.preventDefault();
        const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
        const onerem = parseFloat(
            window.getComputedStyle(document.documentElement).fontSize
        );
        const padding = 1 * onerem;
        const yOffset = -(navbarHeight + padding);
        const element = cardsRef.current[i];
        const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.replaceState(
            null,
            "",
            window.location.href.split("#")[0] + "#" + teamIds[i]
        );
    };

    const toggleOpen = () => {
        setSidebarOpen((prevOpen) => !prevOpen);
    };

    return (
        <>
            <Navbar />
            <SubTheme name="teams">
                {isMobile && <SubteamsTitle>Meet Our Teams</SubteamsTitle>}
                <SubTheme name="sidebar">
                    <SidebarWrapper collapse={sidebarOpen && !isMobile}>
                        {isMobile && sidebarOpen ? (
                            <>
                                <ToggleWrapper onClick={toggleOpen}>
                                    <ToggleIcon>
                                        <FontAwesomeIcon
                                            icon={["fas", "caret-down"]}
                                        />
                                    </ToggleIcon>
                                    <ToggleText>Teams</ToggleText>
                                </ToggleWrapper>
                                {teamNames.map((team, i) => (
                                    <SidebarLink
                                        key={i}
                                        href={"#" + teamIds[i]}
                                        onClick={(e) => handleClick(e, i)}
                                    >
                                        <TeamIcon>
                                            <FontAwesomeIcon
                                                icon={teamIcons[i]}
                                            />
                                        </TeamIcon>
                                        {team}
                                    </SidebarLink>
                                ))}
                            </>
                        ) : isMobile && !sidebarOpen ? (
                            <ToggleWrapper onClick={toggleOpen}>
                                <ToggleIcon>
                                    <FontAwesomeIcon
                                        icon={["fas", "caret-right"]}
                                    />
                                </ToggleIcon>
                                <ToggleText>Teams</ToggleText>
                            </ToggleWrapper>
                        ) : (
                            teamNames.map((team, i) => (
                                <SidebarLink
                                    key={i}
                                    href={"#" + teamIds[i]}
                                    onClick={(e) => handleClick(e, i)}
                                >
                                    <TeamIcon>
                                        <FontAwesomeIcon icon={teamIcons[i]} />
                                    </TeamIcon>
                                    {team}
                                </SidebarLink>
                            ))
                        )}
                    </SidebarWrapper>
                    {!isMobile && (
                        <CollapseContainer sidebarOpen={sidebarOpen}>
                            <CollapseIcon
                                onClick={toggleOpen}
                                sidebarOpen={sidebarOpen}
                            >
                                <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                            </CollapseIcon>
                        </CollapseContainer>
                    )}
                </SubTheme>
                <SubteamCardsDiv>
                    {!isMobile && <SubteamsTitle>Meet Our Teams</SubteamsTitle>}
                    <SubTheme name="cards">
                        {teams.map((team, i) => (
                            <SubteamCard
                                innerRef={(el) => (cardsRef.current[i] = el)}
                                team={team}
                                key={i}
                                even={i % 2 === 0}
                                first={i === 0}
                                teamId={teamIds[i]}
                            />
                        ))}
                    </SubTheme>
                </SubteamCardsDiv>
                <BackToTop />
            </SubTheme>
            <Footer />
        </>
    );
};

export default Teams;
