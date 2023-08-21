import React from "react";
import "utility/fonts.css";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";
import SpecialNavbar from "components/SpecialNavbar.jsx";
import logoUrl from "assets/logo-orange-cropped.png";
import NewPolygonCanvas from "components/NewPolygonCanvas.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";

const HomeBackgroundOuter = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  pointer-events: none;
`;

const ClubName = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: 900;
  line-height: 0.8;
  font-size: clamp(1em, 10vw, 6em);
  color: ${(props) => props.theme.heading};
  text-align: left;
  text-transform: uppercase;
  display: inline;
  vertical-align: middle;
  margin-bottom: 0;
  ${devices.tablet`
        display: inline-block;
        overflow-wrap: break-word;
        width: 60vw;
        font-size: 10vw;
    `}
`;

const MainText = styled.p`
  font-family: "Roboto Condensed";
  font-weight: 900;
  line-height: 0.8;
  padding-left: 10px;
  color: ${(props) => props.theme.text};
  text-align: left;
  position: relative;
  display: block;
  width: 60vw;
  font-size: 5vw;
  ${devices.tablet`
        width: 70vw;
        font-size: 8vw;
    `}
  ${devices.small`
        width: 80vw;
        font-size: 10vw;
    `}
    text-transform: uppercase;
`;

const Logo = styled.img`
  width: 10vw;
  ${devices.desktop`
        width: 13vw;
    `}
  ${devices.tablet`
        width: 15vw;
    `}
    ${devices.small`
        width: 20vw;
    `}
    height: auto;
  padding: 10px 10px;
`;

const HomeWrapper = styled.div`
  overflow: hidden;
`;

const Home = () => (
  <SubTheme name="home">
    <SpecialNavbar />
    <HomeWrapper>
      <NewPolygonCanvas />
      <HomeBackgroundOuter>
        <Logo src={logoUrl} />
        <ClubName>Michigan Hackers</ClubName>
        <MainText>
          a community of individuals who enjoy expressing creativity through
          technology.
        </MainText>
      </HomeBackgroundOuter>
    </HomeWrapper>
  </SubTheme>
);

export default Home;
