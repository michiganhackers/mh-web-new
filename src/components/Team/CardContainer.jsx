import React, { Component } from 'react';
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './CardContainer.css';
import MemberCard from './MemberCard.jsx';
import ben from '../../assets/memberPhotos/Ben.JPG';

var cardStyle = {
    width:'100%'
};

class CardContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <StaticH1>
                    Executive Team
                </StaticH1>
                <StaticP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </StaticP>
                <div class="centered">
                    <section class="cards">
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal" bio="Hi, I'm Alex. I like to party." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Benjamin Carney" title="President" bio="Hi, I'm Ben. I like to dance" />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External" bio="Hi, I'm Erich. I like good kush." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics" bio="Hi, I'm Phoebe. I like to go to Rick's." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation" bio="Hi, I'm Casper. I am a pure Canadian." />
                        </div>
                    </section>
                </div>
                <StaticH1>
                    Senior Advisors
                </StaticH1>
                <StaticP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </StaticP>
                <div class="centered">
                    <section class="cards">
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal" bio="Hi, I'm Alex. I like to party." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Benjamin Carney" title="President" bio="Hi, I'm Ben. I like to dance" />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External" bio="Hi, I'm Erich. I like good kush." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics" bio="Hi, I'm Phoebe. I like to go to Rick's." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation" bio="Hi, I'm Casper. I am a pure Canadian." />
                        </div>
                    </section>
                </div>
                <StaticH1>
                    Core Leadership
                </StaticH1>
                <StaticP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </StaticP>
                <div class="centered">
                    <section class="cards">
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal" bio="Hi, I'm Alex. I like to party." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Benjamin Carney" title="President" bio="Hi, I'm Ben. I like to dance" />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External" bio="Hi, I'm Erich. I like good kush." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics" bio="Hi, I'm Phoebe. I like to go to Rick's." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation" bio="Hi, I'm Casper. I am a pure Canadian." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation" bio="Hi, I'm Casper. I am a pure Canadian." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal" bio="Hi, I'm Alex. I like to party." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Benjamin Carney" title="President" bio="Hi, I'm Ben. I like to dance" />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External" bio="Hi, I'm Erich. I like good kush." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics" bio="Hi, I'm Phoebe. I like to go to Rick's." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation" bio="Hi, I'm Casper. I am a pure Canadian." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation" bio="Hi, I'm Casper. I am a pure Canadian." />
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default CardContainer;