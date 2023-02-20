import React, { useRef, useEffect, useState } from "react";
import "utility/fonts.css";
import Navbar from "components/Navbar.jsx";
import styled from "styled-components";
import teams from "teams.json";
import SubteamCard from "components/Teams/SubteamCard.jsx";
import devices from "utility/MediaQueries.js";
import BackToTop from "./BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubteamCardsDiv = styled.div`
    padding: 0 1rem;
`;

const SidebarWrapper = styled.div`
    background-color: #eee;
    overflow: auto;
`;

const Sidebar = styled.nav`
    display: block;
    padding: 1rem;
    top: 80px;
    ${devices.tablet`
        top: 74px;
    `}
    bottom: 0;
    position: fixed;
    overflow-y: auto;
    width: 300px;
    ${props => !props.sidebarOpen && "width: 60px;"}
    ${devices.desktop`
        width: 100%;
        position: static;
    `}
`;

const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    ${props => !props.sidebarOpen && "grid-template-columns: 60px 1fr;"}
    ${devices.desktop`
        display: block;
    `}
`;

const SidebarLink = styled.a`
    display: block;
    color: black;
    padding: 0.5rem;
    width: 100%;
    border-radius: 10px;
    transition: background-color 0.25s;

    &:hover {
        background-color: #ddd;
        cursor: pointer;
        color: black;
        text-decoration: none;
    }
`;

const SubteamsTitle = styled.h1`
    text-align: center;
    margin: 1rem 0 0;
    ${devices.desktop`
        margin: 1rem 0;
    `}
`;

const ToggleText = styled.p`
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

const Hamburger = styled.span`
    font-size: 2rem;
    line-height: 1rem;
    display: block;
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
    const teamNames = teams.map(team => team.name);
    const teamIds = teamNames.map(name => name.replaceAll(" ", "_").toLowerCase());
    const cardsRef = useRef([]);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const isMobile = useIsMobile();

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, teams.length);
        if (window.location.hash !== "" && document.querySelector(window.location.hash)) {
            window.history.scrollRestoration = "manual";
            // have to wait for all images to load before we can calculate how far to scroll
            Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
                const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
                const onerem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
                const padding = 1 * onerem;
                const yOffset = -(navbarHeight + padding); 
                const element = document.querySelector(window.location.hash);
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({top: y, behavior: 'instant'});
            });
        }
    },[]);


    const handleClick = (e, i) => {
        e.preventDefault();
        const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
        const onerem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        const padding = 1 * onerem;
        const yOffset = -(navbarHeight + padding); 
        const element = cardsRef.current[i];
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        window.history.replaceState(null, "", window.location.href.split("#")[0] + "#" + teamIds[i]);
    };

    const toggleOpen = () => {
        setSidebarOpen(prevOpen => !prevOpen);
    };

    return (
        <>
            <Navbar />
            <PageLayout sidebarOpen={sidebarOpen}>
            {isMobile && <SubteamsTitle>Meet Our Teams</SubteamsTitle>}
            <SidebarWrapper>
                <Sidebar sidebarOpen={sidebarOpen}>
                {isMobile && sidebarOpen ?
                <>
                <ToggleWrapper onClick={toggleOpen}>
                    <ToggleIcon>
                        <FontAwesomeIcon icon={["fas", "caret-down"]}/>
                    </ToggleIcon>
                    <ToggleText>Teams</ToggleText>
                </ToggleWrapper>
                    {teamNames.map((team, i) => 
                        <SidebarLink key={i} href={'#' + teamIds[i]} onClick={e => handleClick(e, i)}>
                            {team}
                        </SidebarLink>
                    )}
                </>
                : isMobile && !sidebarOpen ?
                <ToggleWrapper onClick={toggleOpen}>
                    <ToggleIcon>
                        <FontAwesomeIcon icon={["fas", "caret-right"]}/>
                    </ToggleIcon>
                    <ToggleText>Teams</ToggleText>
                </ToggleWrapper>
                : !isMobile  && sidebarOpen ?
                <>
                <ToggleWrapper onClick={toggleOpen}>
                    <Hamburger>
                        <FontAwesomeIcon icon="bars" />
                    </Hamburger>
                    <ToggleText>Teams</ToggleText>
                </ToggleWrapper>
                    {teamNames.map((team, i) => 
                        <SidebarLink key={i} href={'#' + teamIds[i]} onClick={e => handleClick(e, i)}>
                            {team}
                        </SidebarLink>
                    )}
                </>
                :
                <ToggleWrapper onClick={toggleOpen}>
                    <Hamburger>
                        <FontAwesomeIcon icon="bars" />
                    </Hamburger>
                    <ToggleText>Teams</ToggleText>
                </ToggleWrapper>
            }   
                </Sidebar>
            </SidebarWrapper>
            <SubteamCardsDiv>
                {!isMobile && <SubteamsTitle>Meet Our Teams</SubteamsTitle>}
                {teams.map((team, i) => 
                    <SubteamCard
                        innerRef={el => cardsRef.current[i] = el}
                        team={team}
                        key={i}
                        even={i % 2 === 0}
                        first={i == 0}
                        teamId={teamIds[i]}
                    />
                )}
            </SubteamCardsDiv>
            </PageLayout>
            <BackToTop />
        </>
    );
};

export default Teams;