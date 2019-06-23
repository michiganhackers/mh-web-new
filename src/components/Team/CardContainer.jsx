import React from 'react';
import "../../utility/fonts.css";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './CardContainer.css';
import MemberCard from './MemberCard.jsx';


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
                <div className="centered">
                    <section className="cards">
                      <div className="cardContainerColumn">
                          <MemberCard name="Benjamin Carney" title="President"
                          majorGradYear="Computer Science 2020"
                          job="Dancer "
                          otherInvolvements="Honestly I'm pretty set"
                          interests="Nutrition and fitness, music"
                          githubUrl="https://github.com/benjamincarney"
                          instagramUrl=""
                          linkedinUrl="https://www.linkedin.com/in/benjamincarney"
                          facebookUrl=""
                          personalUrl="https://benjamincarney.github.io/"
                          imagePath='/memberPhotos/Ben.JPG'  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal"
                            bio=""
                            githubUrl=""
                            instagramUrl=""
                            linkedinUrl=""
                            facebookUrl=""
                            personalUrl=""
                            imagePath="/memberPhotos/Alex.JPG"  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External"
                            majorGradYear="Computer Science 2020"
                            job=""
                            otherInvolvements=""
                            interests=""
                            bio=""
                            githubUrl=""
                            instagramUrl=""
                            linkedinUrl=""
                            facebookUrl=""
                            personalUrl=""
                            imagePath="/memberPhotos/Erich.JPG"  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics"
                            majorGradYear="Computer Science 2020"
                            job=""
                            otherInvolvements=""
                            interests=""
                            githubUrl="https://github.com/pl98"
                            instagramUrl="https://www.instagram.com/phoebeliang98/"
                            linkedinUrl="https://www.linkedin.com/in/phoebeliang98/"
                            facebookUrl="https://www.facebook.com/phoebe.n.liang"
                            personalUrl=""
                            imagePath='/memberPhotos/Phoebe.jpg'  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation"
                            majorGradYear="Computer Science 2020"
                            job=""
                            otherInvolvements=""
                            interests=""
                            githubUrl="https://github.com/casper-h"
                            instagramUrl=""
                            linkedinUrl="https://www.linkedin.com/in/casper-hsu-8922a9181/"
                            facebookUrl=""
                            personalUrl=""
                            imagePath='/memberPhotos/Casper.jpg'  />
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
                        <MemberCard name="Janet Vu" title="Senior Advisor/Creative Director"
                        majorGradYear="Computer Science 2021"
                        job="Guide and support incoming executive board members! Also lead marketing online and in real life through graphic design and social media"
                        otherInvolvements=" Privacy research in the School of Information, GEECS (marketing committee), VSA (kinda)"
                        interests="Pokemon Go, thrifting, graphic design, hammocking, animals"
                        githubUrl="https://github.com/jajanet"
                        instagramUrl="http://instagram.com/veryjanet/"
                        linkedinUrl="https://www.linkedin.com/in/janet-vu/"
                        facebookUrl="https://www.facebook.com/jnetvu"
                        personalUrl="https://me--janetvu.repl.co/"
                        imagePath="/memberPhotos/Janet.JPG"  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Connor Svrcek" title="Senior Advisor"
                        majorGradYear="Computer Science 2020"
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/csvrcek"
                        instagramUrl="https://www.instagram.com/cdids/"
                        linkedinUrl="https://www.linkedin.com/in/connor-svrcek-aab07612b/"
                        facebookUrl="https://www.facebook.com/connor.svrcek"
                        personalUrl="https://connorsvrcek.com/"
                        imagePath='/memberPhotos/Connor.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Trevor Sanderson" title="Senior Advisor"
                        majorGradYear="Computer Science 2020"
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Beary.PNG'  />
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
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/eashwar"
                        instagramUrl="https://www.instagram.com/_eashwar/"
                        linkedinUrl="https://www.linkedin.com/in/eashw/"
                        facebookUrl="https://www.facebook.com/eashmohan"
                        personalUrl="https://eash.dev"
                        imagePath='/memberPhotos/Eashwar.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Edward Huang" title="iOS Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/edward-h-b4a147156/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/EdwardH.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Christopher Hafke" title="Web Project Manager"
                        bio="Hi, I'm Chris! I'm a junior studying computer science and math. Feel free to chat with me about web development (and how to get started with learning it), React, Redux, Golang, or anything math or algorithms related."
                        githubUrl="https://github.com/christopherhafke"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/christopher-hafke-8a1968148/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Chris.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Vincent Nagel" title="Android Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/vnagel"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/vincentnagel/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Vincent.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Nicholas Konovalenko" title="Security Director"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/Nkonovalenko"
                        instagramUrl="https://www.instagram.com/konic899/"
                        linkedinUrl="https://www.linkedin.com/in/nicholas-konovalenko-2b3258171/"
                        facebookUrl="https://www.facebook.com/nicholas.konovalenko"
                        personalUrl="https://nickono.com"
                        imagePath='/memberPhotos/Nick.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Eric Lian" title="React Native Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/ericlian1"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/ericlian419/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Eric.JPG'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Paul Carney" title="Hardware Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/paul-carney-07a273169/"
                        facebookUrl="https://www.facebook.com/paul.carney.319?ref=bookmarks"
                        personalUrl=""
                        imagePath='/memberPhotos/Paul.jpeg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Thomas Smith" title="iOS Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/thomasebsmith/"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/thomasebsmith/"
                        facebookUrl=""
                        personalUrl="https://thomasebsmith.github.io/"
                        imagePath='/memberPhotos/Thomas.png'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Owain Kurt" title="Android Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl="https://github.com/Glavon"
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Owain.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Junlin Mo" title="Data Structures and Algorithms Director"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath="/memberPhotos/Beary.PNG"  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Edward Sun" title="React Native Project Manager"
                        majorGradYear=""
                        job=""
                        otherInvolvements=""
                        interests=""
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath="/memberPhotos/Beary.PNG"  />
                    </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default CardContainer;
