import React from "react";
import "utility/fonts.css";
import styled from "styled-components";

const CardDiv = styled.div`
    background-color: ${props => props.even ? "#8DCADF" : "#ED8246"};
    display: flex;
    flex-direction: ${props => props.even ? "row" : "row-reverse"};
    margin: 1rem 0;
    border-radius: 10px;
    max-width: 2000px;
    padding: 2rem;
    min-height: 200px;
`;

const TeamName = styled.h3`
    color: white;
    font-weight: bold;
`;

const TeamDescription = styled.p`
    color: white;
`;

const TeamPhoto = styled.img`
    max-height: 400px;
    width: clamp(100px, 100%, 400px);
    object-fit: contain;
`;

const TeamPhotoDiv = styled.div`
    width: 150%;
    max-width: 400px;
    display: flex;
    justify-content: center;
`;

const TeamInfoDiv = styled.div`
    margin-${props => props.even ? "left" : "right"}: 1rem;
    flex-grow: 2;
`;

const TeamLinksUl = styled.ul`
    padding-left: 0;
`;

const TeamLinksLi = styled.li`
    list-style: none;
`;

const TeamLink = styled.a`

`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: min-content;
    border-top: 3px solid ${props => props.even ? "#8DCADF" : "#ED8246"};

    &:first-child {
        border-top: none;
    }
`;

const SubteamCard = (props) => {
    const { team, innerRef, even } = props;
    const { name, description, photoUrl, links } = team;

    return (
        <CardWrapper even={even}>
            <CardDiv ref={innerRef} even={even}>
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
        </CardWrapper>
    );
};

export default SubteamCard;
