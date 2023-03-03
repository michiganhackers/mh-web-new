import React from "react";
import "utility/fonts.css";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";

const CardDiv = styled.div`
    background-color: ${props => props.even ? props.theme.backgroundAlt : props.theme.background};
    display: flex;
    flex-direction: ${props => props.even ? "row" : "row-reverse"};
    margin: 1rem 0;
    border-radius: 10px;
    max-width: 1100px;
    padding: 2rem;
    min-height: 200px;
    ${devices.tablet`
        flex-direction: column;
        max-width: 500px;
    `}

`;

const TeamName = styled.h3`
    color: ${props => props.theme.heading};
    font-weight: bold;
`;

const TeamDescription = styled.p`
    color: ${props => props.theme.text};
    white-space: pre-line;
`;

const TeamPhoto = styled.img`
    width: clamp(100px, 100%, 300px);
    ${devices.tablet`
        width: 100%;
        margin-bottom: 1rem;
    `}
    object-fit: contain;
`;

const TeamPhotoDiv = styled.div`
    flex: 0 0 300px;
    ${devices.tablet`
        flex: 0 0 200px;
    `}
    ${devices.tiny`
        flex: 0 0 auto;
    `}
    display: flex;
    justify-content: center;
`;

const TeamInfoDiv = styled.div`
    margin-${props => props.even ? "left" : "right"}: 1rem;
    ${devices.tablet`
        margin: 0;
    `}
    flex-grow: 2;
`;

const TeamLinksUl = styled.ul`
    padding-left: 0;
    margin-bottom: 0;
`;

const TeamLinksLi = styled.li`
    list-style: none;
`;

const TeamLink = styled.a`
    color: ${props => props.theme.link};
`;

const CardWrapper = styled.article`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: min-content;
`;

const CardBorder = styled.div`
    border-top: 3px solid ${props => props.even ? props.theme.background : props.theme.backgroundAlt};

    ${props => props.first && 'border-top: none;'}
`;

const SubteamCard = (props) => {
    const { team, innerRef, even, first, teamId } = props;
    const { name, description, photoUrl, links } = team;

    return (
        <CardWrapper>
            <CardBorder first={first} even={even}>
                <CardDiv ref={innerRef} even={even} id={teamId}>
                    <TeamPhotoDiv>
                        <TeamPhoto src={photoUrl} />
                    </TeamPhotoDiv>
                    <TeamInfoDiv even={even}>
                        <TeamName>{name}</TeamName>
                        <TeamDescription>{description}</TeamDescription>
                        <TeamLinksUl>
                            {links.map((linkObj, i) => 
                                <TeamLinksLi key={i}>
                                    <TeamLink
                                        href={linkObj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {linkObj.title}
                                    </TeamLink>
                                </TeamLinksLi>
                            )}
                        </TeamLinksUl>
                    </TeamInfoDiv>
                </CardDiv>
            </CardBorder>
        </CardWrapper>
    );
};

export default SubteamCard;
