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
                            <MemberCard name="Janet Vu" title="Senior Advisor" bio="Hi, I'm Janet and I loveeee pokeemon." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Connor Svrcek" title="Senior Advisor" bio="Hi, I'm Connor and I have luscious locs." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Trevor Sanderson" title="Senior Advisor" bio="Hi, I'm Trevor and I like beer." />
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
                            <MemberCard name="Edward Huang" title="iOS Project Manager" bio="Hi, I'm Edward." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Thomas Smith" title="iOS Project Manager" bio="Hi, I'm Thomas." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Vincent Nagel" title="Android Project Manager" bio="Hi, I'm Vincent" />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Owain Kurt" title="Android Project Manager" bio="Hi, I'm Owain." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Edward Sun" title="React Native Project Manager" bio="Hi, I'm Edward." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Eric Lian" title="React Native Project Manager" bio="Hi, I'm Eric." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Eashwar Mohan" title="Hacker Bootcamp Director" bio="Hi, I'm Eashwar." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Christopher Hafke" title="Web Project Manager" bio="Hi, Christopher." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Junlin Mo" title="Data Structures and Interviews Director" bio="Hi, I'm Junlin." />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Nicholas Konovalenko" title="Security Director" bio="Hi, I'm Nicholas." />
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default CardContainer;