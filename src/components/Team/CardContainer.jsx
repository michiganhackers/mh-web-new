import React from 'react';
import "../../utility/fonts.css";
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";
import './CardContainer.css';
import MemberCard from './MemberCard.jsx';


class CardContainer extends React.Component {

    render(){
        return(
            <React.Fragment>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <StaticH1>
                    Executive Team
                </StaticH1>
                <div className="centered">
                    <section className="cards">
                      <div className="cardContainerColumn">
                          <MemberCard name="Benjamin Carney" title="President"
                            gradYear="2020"
                            interests="Fitness, trail running, nutrition, playing music"
                            funFact="Voluntarily takes cold showers on a daily basis and only eats plants 🌱 "
                            githubUrl="https://github.com/benjamincarney"
                            instagramUrl=""
                            linkedinUrl="https://www.linkedin.com/in/benjamincarney"
                            facebookUrl=""
                            personalUrl="https://benjamincarney.github.io/"
                            imagePath='/memberPhotos/Ben.JPG'  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Alex Dortzbach" title="Vice President of Internal"
                            gradYear="2022"              
                            interests="Music, philosophy, Detroit, differences between regional dialects"
                            funFact="Used to live in Germany"
                            githubUrl="https://github.com/AlexDortzbach"
                            instagramUrl=""
                            linkedinUrl="https://www.linkedin.com/in/alexandra-dortzbach-b03b56172/"
                            facebookUrl=""
                            personalUrl=""
                            imagePath="/memberPhotos/Alex.JPG"  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Erich Shan" title="Vice President of External"
                            gradYear="2021"
                            interests="Nature, sleeping"
                            funFact="Once slept for 16 hours"
                            githubUrl="https://github.com/erich23"
                            instagramUrl=""
                            linkedinUrl="https://www.linkedin.com/in/erich-shan-716208157/"
                            facebookUrl=""
                            personalUrl=""
                            imagePath="/memberPhotos/Erich.JPG"  />
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Phoebe Liang" title="Logistics"
                            gradYear="2022"
                            interests="Cooking, guitar, video games, traveling "
                            funFact="Has lived in four different countries"
                            githubUrl="https://github.com/pl98"
                            instagramUrl="https://www.instagram.com/phoebeliang98/"
                            linkedinUrl="https://www.linkedin.com/in/phoebeliang98/"
                            facebookUrl="https://www.facebook.com/phoebe.n.liang"
                            personalUrl=""
                            imagePath='/memberPhotos/Phoebe.jpg'/>
                        </div>
                        <div className="cardContainerColumn">
                            <MemberCard name="Casper Hsu" title="Innovation"
                            gradYear="2020"
                            interests="Hockey, video games"
                            funFact="Probably consumes way too much coffee for his own good"
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
                <div className="centered">
                    <section className="cards">
                    <div className="cardContainerColumn">
                        <MemberCard name="Janet Vu" title="Senior Advisor, Creative Director"
                        gradYear="2021"
                        interests="Pokemon, thrifting, PC games"
                        funFact="Once won 20 pairs of free Crocs"
                        githubUrl="https://github.com/jajanet"
                        instagramUrl="http://instagram.com/veryjanet/"
                        linkedinUrl="https://www.linkedin.com/in/janet-vu/"
                        facebookUrl="https://www.facebook.com/jnetvu"
                        personalUrl="https://me--janetvu.repl.co/"
                        imagePath="/memberPhotos/Janet.JPG"  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Connor Svrcek" title="Senior Advisor"
                        gradYear="2020"
                        interests="Rap music, being stoked, tennis"
                        funFact="Last name means “cricket” in Slovakian"
                        githubUrl="https://github.com/csvrcek"
                        instagramUrl="https://www.instagram.com/cdids/"
                        linkedinUrl="https://www.linkedin.com/in/connor-svrcek-aab07612b/"
                        facebookUrl="https://www.facebook.com/connor.svrcek"
                        personalUrl="https://connorsvrcek.com/"
                        imagePath='/memberPhotos/Connor.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Trevor Sanderson" title="Senior Advisor"
                        gradYear="2019"
                        interests="Video games, fantasy football, rap music"
                        funFact="Is not actually a cat as pictured"
                        githubUrl="https://github.com/tjsande"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/trevor-sanderson-459028171/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Beary.PNG'  />
                    </div>
                    </section>
                </div>
                <StaticH1>
                    Core Leadership
                </StaticH1>
                <div className="centered">
                    <section className="cards">
                    <div className="cardContainerColumn">
                        <MemberCard name="Eashwar Mohan" title="Hacker Bootcamp Director"
                        gradYear="2020"
                        interests="Video games, music, video game music"
                        funFact="Lived with Chris over the summer and was paid to make Roblox memes"
                        githubUrl="https://github.com/eashwar"
                        instagramUrl="https://www.instagram.com/_eashwar/"
                        linkedinUrl="https://www.linkedin.com/in/eashw/"
                        facebookUrl="https://www.facebook.com/eashmohan"
                        personalUrl="https://eash.dev"
                        imagePath='/memberPhotos/Eashwar.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Edward Huang" title="iOS Lead Engineer"
                        gradYear="2022"
                        interests="Basketball, iOS dev, web dev, watching short documentaries"
                        funFact="Doesn't like coffee and bubble tea"
                        githubUrl="https://github.com/edward2018211"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/edward-h-b4a147156/"
                        facebookUrl=""
                        personalUrl="https://edward2018211.github.io/edwhuang.me/"
                        imagePath='/memberPhotos/EdwardH.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Christopher Hafke" title="Web Lead Engineer"
                        gradYear="2021"
                        interests="React, math, tennis, video games, Golang"
                        funFact="Lived with Eash over the summer and was paid to make Roblox memes"
                        githubUrl="https://github.com/christopherhafke"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/christopher-hafke-8a1968148/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Chris.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Vincent Nagel" title="Android Lead Engineer"
                        gradYear="2019"
                        interests="Android development, biking, kayaking"
                        funFact="Has gone skydiving"
                        githubUrl="https://github.com/vnagel"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/vincentnagel/"
                        facebookUrl="https://www.facebook.com/profile.php?id=100000690746854"
                        personalUrl=""
                        imagePath='/memberPhotos/Vincent.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Nicholas Konovalenko" title="Security Lead Engineer"
                        gradYear="2022"
                        interests="Stocks, video games, tennis"
                        funFact="Won Division II at PanAmerican Intercollegiate Chess Championships on the UMich Team"
                        githubUrl="https://github.com/Nkonovalenko"
                        instagramUrl="https://www.instagram.com/konic899/"
                        linkedinUrl="https://www.linkedin.com/in/nicholas-konovalenko-2b3258171/"
                        facebookUrl="https://www.facebook.com/nicholas.konovalenko"
                        personalUrl="https://nickono.com"
                        imagePath='/memberPhotos/Nick.jpg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Paul Carney" title="Hardware Lead Engineer"
                        gradYear="2022"
                        interests="Skateboarding, guitar, drums"
                        funFact="Can kickflip over you"
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/paul-carney-07a273169/"
                        facebookUrl="https://www.facebook.com/paul.carney.319?ref=bookmarks"
                        personalUrl=""
                        imagePath='/memberPhotos/Paul.jpeg'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Thomas Smith" title="iOS Lead Engineer"
                        gradYear="2022"
                        interests="Backpacking, canoeing, board games"
                        funFact="Walks 10+ miles every day"
                        githubUrl="https://github.com/thomasebsmith/"
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/thomasebsmith/"
                        facebookUrl=""
                        personalUrl="https://thomasebsmith.github.io/"
                        imagePath='/memberPhotos/Thomas.png'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Eric Lian" title="React Native Lead Engineer"
                        gradYear="2022"
                        interests="Astronomy, Drawing, Music (guitar, piano), Filmmaking, Workout, Stocks, Video Games, cards & board games"
                        funFact="Skipped kindergarden"
                        githubUrl="https://github.com/ericlian1"
                        instagramUrl="https://www.instagram.com/eric_lian_/"
                        linkedinUrl="https://www.linkedin.com/in/ericlian419/"
                        facebookUrl="https://www.facebook.com/EricLian123"
                        personalUrl=""
                        imagePath='/memberPhotos/Eric.JPG'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Junlin Mo" title="Interviewing Director"
                        gradYear="2021"
                        interests="Business, Music (piano, guitar, writing, singing), Cognition, Freerunning, Fitness, Video games"
                        funFact="Started a few businesses, also an EECS 281 IA"
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl="https://www.linkedin.com/in/junlin-mo/"
                        facebookUrl=""
                        personalUrl=""
                        imagePath="/memberPhotos/Junlin.jpg"  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Owain Kurt" title="Android Lead Engineer"
                        gradYear="10101010"
                        interests="Cat things, sleeping, eating, lounging around"
                        funFact="Has had internships at Google, Facebook, and Amazon"
                        githubUrl=""
                        instagramUrl=""
                        linkedinUrl=""
                        facebookUrl=""
                        personalUrl=""
                        imagePath='/memberPhotos/Beary.PNG'  />
                    </div>
                    <div className="cardContainerColumn">
                        <MemberCard name="Edward Sun" title="React Native Lead Engineer"
                        gradYear="10101010"
                        interests="Cat things, sleeping, eating, lounging around"
                        funFact="Has had internships at Google, Facebook, and Amazon"
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