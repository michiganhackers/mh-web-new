import React, { Component } from "react";
import "../../utility/fonts.css";
import styled from "styled-components";
import devices from "../../utility/MediaQueries.js";
import $ from "jquery";

import SpecialNavbar from "../SpecialNavbar.jsx";

import logoUrl from "../../assets/logo-orange-cropped.png";
import NewPolygonCanvas from "../NewPolygonCanvas";

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
    color: #fff;
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
    color: #fff;
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

class Home extends Component {
    componentDidMount() {
        // TODO: see if we can set up dimensions properly so we don't need this
        //  might be a factor in the mobile issue
        $("body").css("overflow", "hidden");
    }

    componentWillUnmount() {
        $("body").css("overflow", "initial");
    }

    render() {
        return (
            <React.Fragment>
                <SpecialNavbar />
                <NewPolygonCanvas />
                <HomeBackgroundOuter>
                    <Logo src={logoUrl} />
                    <ClubName>Michigan Hackers</ClubName>
                    <MainText>
                        a community of individuals who enjoy expressing
                        creativity through technology.
                    </MainText>
                </HomeBackgroundOuter>
            </React.Fragment>
        );
    }
}

export default Home;
