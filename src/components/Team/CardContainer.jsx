import React, { Component } from 'react';
import "../../utility/fonts.css";
import styled from 'styled-components';
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import devices from '../../utility/MediaQueries.js';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './CardContainer.css';
import MemberCard from './MemberCard.jsx';
import ben from '../../assets/memberPhotos/Ben.JPG';
import phoebe from '../../assets/memberPhotos/Phoebe.jpg';
import casper from '../../assets/memberPhotos/Casper.jpg';

var cardStyle = {
    width:'100%'
};

class CardContainer extends React.Component {

    constructor(props){
        super(props);
        const baseUrl = '../../assets/memberPhotos/';
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
                <div className="centered">
                    <section className="cards">
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal"
                            bio=""
                            githubUrl=""
                            instagramUrl=""
                            linkedinUrl=""
                            facebookUrl=""
                            personalUrl=""
                            imagePath=""  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Benjamin Carney" title="President"
                            bio="I can slam dunk. Okay, not really, but that would be sick."
                            githubUrl="https://github.com/benjamincarney"
                            instagramUrl=""
                            linkedinUrl="https://www.linkedin.com/in/benjamincarney"
                            facebookUrl=""
                            personalUrl="https://benjamincarney.github.io/"
                            imagePath='../../assets/memberPhotos/Ben.JPG'  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External"
                            bio=""
                            githubUrl=""
                            instagramUrl=""
                            linkedinUrl=""
                            facebookUrl=""
                            personalUrl=""
                            imagePath=""  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics"
                            bio="Hi! I'm a sophomore majoring in Computer Science, with an interest in iOS development and software engineering. If I'm not coding then I'm probably cooking, because I love food and I'm always making something new! "
                            githubUrl="https://github.com/pl98"
                            instagramUrl="https://www.instagram.com/phoebeliang98/"
                            linkedinUrl="https://www.linkedin.com/in/phoebeliang98/"
                            facebookUrl="https://www.facebook.com/phoebe.n.liang"
                            personalUrl=""
                            imagePath='../../assets/memberPhotos/phoebe.jpg'  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation"
                            bio="Hockey, Hockey, and did I mention Hockey?"
                            githubUrl="https://github.com/casper-h"
                            instagramUrl=""
                            linkedinUrl="https://www.linkedin.com/in/casper-hsu-8922a9181/"
                            facebookUrl=""
                            personalUrl=""
                            imagePath='../../assets/memberPhotos/Ben.JPG'  />
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
                <div className="centered">
                    <section className="cards">
                    <div className="cardContainerColumn">
                        <MemberCard name="Janet Vu" title="Senior Advisor"
                        bio=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath=""  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Connor Svrcek" title="Senior Advisor"
                        bio="Lover of dogs, movies, comics, and iOS"
                        githubUrl="https://github.com/csvrcek"
                        instagramUrl="https://www.instagram.com/cdids/"
                        linkedinUrl="https://www.linkedin.com/in/connor-svrcek-aab07612b/"
                        facebookUrl="https://www.facebook.com/connor.svrcek"
                        personalUrl="https://connorsvrcek.com/"
                        imagePath=''  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Trevor Sanderson" title="Senior Advisor"
                        bio=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath=''  />
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
                <div className="centered">
                    <section className="cards">
                    <div className="cardContainerColumn">
                        <MemberCard name="Eashwar Mohan" title="Hacker Bootcamp Director"
                        bio="Hi! I'm a senior studying computer science and a minor in music, focusing in video game audio. I'm passionate about music technology and CS education."
                        githubUrl="https://github.com/eashwar"
                        instagramUrl="https://www.instagram.com/_eashwar/"
                        linkedinUrl="https://www.linkedin.com/in/eashw/"
                        facebookUrl="https://www.facebook.com/eashmohan"
                        personalUrl="https://eash.dev"
                        imagePath='../../assets/memberPhotos/Eashwar.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Edward Huang" title="iOS Project Manager"
                        bio="Hey I'm Edward and as an aspiring computer scientist, my main interests lie in software engineering and machine learning. When I'm not coding, I am probably watching football or basketball. "
                        githubUrl="https://github.com/edward2018211"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/edward-h-b4a147156/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='../../assets/memberPhotos/EdwardH.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Christopher Hafke" title="Web Project Manager"
                        bio="Hi, I'm Chris! I'm a junior studying computer science and math. Feel free to chat with me about web development (and how to get started with learning it), React, Redux, Golang, or anything math or algorithms related."
                        githubUrl="https://github.com/christopherhafke"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/christopher-hafke-8a1968148/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='../../assets/memberPhotos/Chris.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Vincent Nagel" title="Android Project Manager"
                        bio="I'm a senior studying computer science. I enjoy developing Android apps in my free time."
                        githubUrl="https://github.com/vnagel"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/vincentnagel/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='../../assets/memberPhotos/Vincent.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Nicholas Konovalenko" title="Security Director"
                        bio="Sophomore studying Computer Science at the University of Michigan's College of Engineering. Interested in security, artificial intelligence, and stocks."
                        githubUrl="https://github.com/Nkonovalenko"
                        instagramUrl="https://www.instagram.com/konic899/"
                        linkedinUrl="https://www.linkedin.com/in/nicholas-konovalenko-2b3258171/"
                        facebookUrl="https://www.facebook.com/nicholas.konovalenko"
                        personalUrl="https://nickono.com"
                        imagePath='../../assets/memberPhotos/Nick.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Eric Lian" title="React Native Project Manager"
                        bio="Sophomore pursuing CSE degree. Engaged in mobile dev and machine learning."
                        githubUrl="https://github.com/ericlian1"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/ericlian419/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='../../assets/memberPhotos/Eric.JPG'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Paul Carney" title="Hardware Project Manager"
                        bio="I'm a computer engineering major with a focus on embedded systems. I also love skateboarding, playing drums and guitar, and animals."
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/paul-carney-07a273169/"
                        facebookUrl="https://www.facebook.com/paul.carney.319?ref=bookmarks"
                        personalUrl=""
                        imagePath='../../assets/memberPhotos/Paul.jpeg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Thomas Smith" title="iOS Project Manager"
                        bio="Hi! I'm Thomas. I'm a sophomore studying computer science. Besides computer programming, I like hiking, camping, and enjoying the outdoors."
                        githubUrl="https://github.com/thomasebsmith/"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/thomasebsmith/"
                        facebookUrl=""
                        personalUrl="https://thomasebsmith.github.io/"
                        imagePath='../../assets/memberPhotos/Thomas.png'  />
                    </div><div className="cardContainerColumn">
                        <MemberCard name="Owain Kurt" title="Android Project Manager"
                        bio=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath=''  />
                    </div><div className="cardContainerColumn">
                        <MemberCard name="Junlin Mo" title="Data Structures and Interview Director"
                        bio=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath=''  />
                    </div><div className="cardContainerColumn">
                        <MemberCard name="Edward Sun" title="React Native Project Manager"
                        bio=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath=''  />
                    </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default CardContainer;
