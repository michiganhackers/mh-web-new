import React, { useRef, useEffect } from "react";
import "utility/fonts.css";
import Navbar from "components/Navbar.jsx";
import styled from "styled-components";
import teams from "teams.json";
import SubteamCard from "components/Teams/SubteamCard.jsx";
import devices from "utility/MediaQueries.js";

const OurSubteamsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: min-content;
`;

const OurSubsteamsDiv = styled.div`
    margin: 1rem 1rem 0;
    border-radius: 10px;
    width: 100%;
    max-width: 1200px;
    background-color: #ED8246;
    padding: 1rem;

    ${devices.tablet`
        max-width: 500px;
    `}
`;

const OurSubteamsTitle = styled.h1`
    color: white;
    text-align: center;
    font-weight: bold;
`;

const SubteamButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 220px);
    ${devices.tablet`
        grid-template-columns: repeat(2, 200px);
    `}
    ${devices.small`
        grid-template-columns: repeat(2, 150px);
    `}
    ${devices.tiny`
        grid-template-columns: repeat(2, 120px);
    `}
    gap: 1rem;
`;

const SubteamButtonsGridWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const SubteamButtonWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    ${devices.tablet`
        ${props => props.last && "grid-column: 1 / span 2;"}
    `}
    ${devices.tiny`
        ${props => props.last && "grid-column: 1 / span 2;"}
    `}
`;

const SubteamButton = styled.button`
    border: 2px solid white;
    background-color: white;
    color: #F18048;
    width: 220px;
    ${devices.tablet`
        width: 200px;
    `}
    ${devices.small`
        width: 150px;
    `}
    ${devices.tiny`
        width: 120px;
    `}
    min-height: 40px;
    outline: none;
    font-size: 1rem;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
        border: 2px solid white;
        background-color: #F18048;
        color: white;
    }

    &:focus {
        outline: none;
    }
`;

const SubteamCardsDiv = styled.div`
    padding: 0 1rem;
`;

const Teams = () => {
    const teamNames = teams.map(team => team.name);
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, teams.length);
    },[]);


    const handleClick = i => {
        const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
        const onerem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        const padding = 1 * onerem;
        const yOffset = -(navbarHeight + padding); 
        const element = cardsRef.current[i];
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    };

    return (
        <>
            <Navbar />
            <OurSubteamsWrapper>
                <OurSubsteamsDiv>
                    <OurSubteamsTitle>Our Subteams</OurSubteamsTitle>
                    <SubteamButtonsGridWrapper>
                        <SubteamButtonsGrid>
                            {teamNames.map((teamName, i) => 
                                <SubteamButtonWrapper key={i} last={i == teamNames.length - 1}>
                                    <SubteamButton onClick={() => handleClick(i)}>{teamName}</SubteamButton>
                                </SubteamButtonWrapper>
                            )}
                        </SubteamButtonsGrid>
                    </SubteamButtonsGridWrapper>
                </OurSubsteamsDiv>
            </OurSubteamsWrapper>
            <SubteamCardsDiv>
                {teams.map((team, i) => 
                    <SubteamCard
                        innerRef={el => cardsRef.current[i] = el}
                        team={team}
                        key={i}
                        even={i % 2 === 0}
                        first={i == 0}
                    />
                )}
            </SubteamCardsDiv>
        </>
    );
};

export default Teams;