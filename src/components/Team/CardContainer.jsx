import React from "react";
import "../../utility/fonts.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CardContainer.css";
import MemberCard from "./MemberCard.jsx";
import Roster from "./Roster.jsx";

import CoreTeam from "../../assets/CoreTeam.JPG";
import Squad from "../../assets/Squad.JPG";
import Bros from "../../assets/Bros.JPG";
import PaintTheRockGroup from "../../assets/PaintTheRockGroup.JPG";
import PaulBubble from "../../assets/PaulBubble.JPG";
import JanetBubbles from "../../assets/JanetBubbles.JPG";
import Escapade from "../../assets/Escapade.JPG";
import ErichHands from "../../assets/ErichHands.JPG";
import Smoothie from "../../assets/Smoothie.jpg";
import MichiganRock from "../../assets/MichiganRock.JPG";
import SubpageOuter from "../SubpageOuter/SubpageOuter";

class CardContainer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
				<div className="carouselContainer">
					<Carousel autoplay>
						<div>
							<img alt="Core Team" src={CoreTeam} />
							<p className="legend">The entire 2019-2020 Core Team!</p>
						</div>
						<div>
							<img alt="Festifall 2019" src={Squad} />
							<p className="legend">Festifall 2019</p>
						</div>
						<div>
							<img alt="Paint the Rock" src={ErichHands} />
							<p className="legend">Paint the Rock 2019</p>
						</div>
						<div>
							<img alt="Mass Meeting" src={Bros} />
							<p className="legend">Mass Meeting 2019</p>
						</div>
						<div>
							<img alt="Paint the Rock" src={PaintTheRockGroup} />
							<p className="legend">Paint the Rock 2019</p>
						</div>
						<div>
							<img alt="Bubbles" src={JanetBubbles} />
							<p className="legend">Hands up!</p>
						</div>
						<div>
							<img alt="Escapade" src={Escapade} />
							<p className="legend">Escapade 2019</p>
						</div>
						<div>
							<img alt="Smootie Party" src={Smoothie} />
							<p className="legend">Smoothie Party 2019</p>
						</div>
						<div>
							<img alt="Paul introspection" src={PaulBubble} />
							<p className="legend">Paul being introspective</p>
						</div>
						<div>
							<img alt="Paint the Rock" src={MichiganRock} />
							<p className="legend">Paint the Rock 2019</p>
						</div>
					</Carousel>
				</div>
				<StaticH1>Executive Team</StaticH1>
				<div className="centered">
					<section className="cards">
						<div className="cardContainerColumn">
							<MemberCard
								name="Benjamin Carney"
								title="President"
								gradYear="2020"
								interests="Fitness, trail running, nutrition, playing music"
								funFact="Voluntarily takes cold showers on a daily basis and only eats plants 🌱 "
								githubUrl="https://github.com/benjamincarney"
								linkedinUrl="https://www.linkedin.com/in/benjamincarney"
								personalUrl="https://benjamincarney.github.io/"
								imagePath="/memberPhotos/Ben.JPG"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Alex Dortzbach"
								title="Vice President of Member Experience"
								gradYear="2022"
								interests="Music, philosophy, Detroit, differences between regional dialects"
								funFact="Used to live in Germany"
								githubUrl="https://github.com/AlexDortzbach"
								linkedinUrl="https://www.linkedin.com/in/alexandra-dortzbach-b03b56172/"
								imagePath="/memberPhotos/Alex.JPG"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Erich Shan"
								title="Vice President of External"
								gradYear="2021"
								interests="Nature, sleeping"
								funFact="Once slept for 16 hours"
								githubUrl="https://github.com/erich23"
								linkedinUrl="https://www.linkedin.com/in/erich-shan-716208157/"
								imagePath="/memberPhotos/Erich.JPG"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Phoebe Liang"
								title="Vice President of Logistics"
								gradYear="2022"
								interests="Cooking, guitar, video games, traveling "
								funFact="Has lived in four different countries"
								githubUrl="https://github.com/pl98"
								instagramUrl="https://www.instagram.com/phoebeliang98/"
								linkedinUrl="https://www.linkedin.com/in/phoebeliang98/"
								facebookUrl="https://www.facebook.com/phoebe.n.liang"
								imagePath="/memberPhotos/Phoebe.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Casper Hsu"
								title="Vice President of Innovation"
								gradYear="2020"
								interests="Hockey, video games"
								funFact="Probably consumes way too much coffee for his own good"
								githubUrl="https://github.com/casper-h"
								linkedinUrl="https://www.linkedin.com/in/casper-hsu-8922a9181/"
								imagePath="/memberPhotos/Casper.jpg"
							/>
						</div>
					</section>
				</div>
				<StaticH1>Core Leadership</StaticH1>
				<div className="centered">
					<section className="cards">
						<div className="cardContainerColumn">
							<MemberCard
								name="Eashwar Mohan"
								title="Hacker Bootcamp Director"
								gradYear="2020"
								interests="Video games, music, video game music"
								funFact="Lived with Chris over the summer and was paid to make Roblox memes"
								githubUrl="https://github.com/eashwar"
								instagramUrl="https://www.instagram.com/_eashwar/"
								linkedinUrl="https://www.linkedin.com/in/eashw/"
								facebookUrl="https://www.facebook.com/eashmohan"
								personalUrl="https://eash.dev"
								imagePath="/memberPhotos/Eashwar.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Edward Huang"
								title="iOS Lead Engineer"
								gradYear="2022"
								interests="Basketball, iOS dev, web dev, watching short documentaries"
								funFact="Doesn't like coffee and bubble tea"
								githubUrl="https://github.com/edward2018211"
								linkedinUrl="https://www.linkedin.com/in/edward-h-b4a147156/"
								personalUrl="https://edward2018211.github.io/edwhuang.me/"
								imagePath="/memberPhotos/EdwardH.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Ibtida Bhuiyan"
								title="Independent Hacker Core Lead"
								gradYear="2021"
								interests="Traveling, volleyball, video games"
								funFact="Was born in Japan"
								githubUrl="https://github.com/ibhuiyan17"
								linkedinUrl="https://www.linkedin.com/in/ibtidabhuiyan/"
								personalUrl="http://ibtida.me/"
								imagePath="/memberPhotos/Ibtida.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Christopher Hafke"
								title="Web Lead Engineer"
								gradYear="2020"
								interests="React, math, tennis, video games, Golang"
								funFact="Lived with Eash over the summer and was paid to make Roblox memes"
								githubUrl="https://github.com/christopherhafke"
								linkedinUrl="https://www.linkedin.com/in/christopher-hafke-8a1968148/"
								imagePath="/memberPhotos/Chris.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Vincent Nagel"
								title="Android Lead Engineer"
								gradYear="2019"
								interests="Android development, biking, kayaking"
								funFact="Has gone skydiving"
								githubUrl="https://github.com/vnagel"
								linkedinUrl="https://www.linkedin.com/in/vincentnagel/"
								facebookUrl="https://www.facebook.com/profile.php?id=100000690746854"
								imagePath="/memberPhotos/Vincent.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Nicholas Konovalenko"
								title="Security Lead Engineer"
								gradYear="2021"
								interests="Stocks, video games, tennis"
								funFact="Won Division II at PanAmerican Intercollegiate Chess Championships on the UMich Team"
								githubUrl="https://github.com/Nkonovalenko"
								instagramUrl="https://www.instagram.com/konic899/"
								linkedinUrl="https://www.linkedin.com/in/nicholas-konovalenko-2b3258171/"
								facebookUrl="https://www.facebook.com/nicholas.konovalenko"
								personalUrl="https://nickono.com"
								imagePath="/memberPhotos/Nick.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Paul Carney"
								title="Embedded Systems Lead Engineer"
								gradYear="2022"
								interests="Skateboarding, guitar, drums"
								funFact="Can kickflip over you"
								linkedinUrl="https://www.linkedin.com/in/paul-carney-07a273169/"
								facebookUrl="https://www.facebook.com/paul.carney.319?ref=bookmarks"
								imagePath="/memberPhotos/Paul.jpeg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Janet Vu"
								title="Creative Director"
								gradYear="2021"
								interests="Pokemon, thrifting, PC games"
								funFact="Once won 20 pairs of free Crocs"
								githubUrl="https://github.com/jajanet"
								instagramUrl="http://instagram.com/veryjanet/"
								linkedinUrl="https://www.linkedin.com/in/janet-vu/"
								facebookUrl="https://www.facebook.com/jnetvu"
								personalUrl="https://me--janetvu.repl.co/"
								imagePath="/memberPhotos/Janet.JPG"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Thomas Smith"
								title="iOS Lead Engineer"
								gradYear="2022"
								interests="Backpacking, canoeing, board games"
								funFact="Walks 10+ miles every day"
								githubUrl="https://github.com/thomasebsmith/"
								linkedinUrl="https://www.linkedin.com/in/thomasebsmith/"
								personalUrl="https://thomasebsmith.github.io/"
								imagePath="/memberPhotos/Thomas.png"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Junlin Mo"
								title="Interviewing Director"
								gradYear="2021"
								interests="Business, music (piano, guitar, writing, singing), brain computer interfacing, freerunning, fitness, video games"
								funFact="Started a few businesses, also an EECS 281 IA"
								linkedinUrl="https://www.linkedin.com/in/junlin-mo/"
								imagePath="/memberPhotos/Junlin.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="Ryan Khzouz"
								title="Android Lead Engineer"
								gradYear="2021"
								interests="Basketball, video games"
								funFact="Has an identical twin"
								linkedinUrl="https://www.linkedin.com/in/ryankhzouz/"
								personalUrl="https://github.com/rckhzouz"
								imagePath="/memberPhotos/Placeholder.jpg"
							/>
						</div>
						<div className="cardContainerColumn">
							<MemberCard
								name="David Wang"
								title="Android Lead Engineer"
								gradYear="2022"
								interests="Reading, the 2019 NBA champion Toronto Raptors, hip hop/classical music"
								funFact="Is French Canadian"
								githubUrl="https://github.com/davidjrwang"
								linkedinUrl="https://www.linkedin.com/in/davidjrwang"
								imagePath="/memberPhotos/David.jpg"
							/>
						</div>
					</section>
					<SubpageOuter>
						<Roster />
					</SubpageOuter>
					<StaticH1>Senior Advisors</StaticH1>
					<div className="centered">
						<section className="cards">
							<div className="cardContainerColumn">
								<MemberCard
									name="Janet Vu"
									title="Senior Advisor"
									gradYear="2021"
									interests="Pokemon, thrifting, PC games"
									funFact="Once won 20 pairs of free Crocs"
									githubUrl="https://github.com/jajanet"
									instagramUrl="http://instagram.com/veryjanet/"
									linkedinUrl="https://www.linkedin.com/in/janet-vu/"
									facebookUrl="https://www.facebook.com/jnetvu"
									personalUrl="https://me--janetvu.repl.co/"
									imagePath="/memberPhotos/Janet.JPG"
								/>
							</div>
							<div className="cardContainerColumn">
								<MemberCard
									name="Connor Svrcek"
									title="Senior Advisor"
									gradYear="2020"
									interests="Rap music, being stoked, tennis"
									funFact="Last name means “cricket” in Slovakian"
									githubUrl="https://github.com/csvrcek"
									instagramUrl="https://www.instagram.com/cdids/"
									linkedinUrl="https://www.linkedin.com/in/connor-svrcek-aab07612b/"
									facebookUrl="https://www.facebook.com/connor.svrcek"
									personalUrl="https://connorsvrcek.com/"
									imagePath="/memberPhotos/Connor.jpg"
								/>
							</div>
							<div className="cardContainerColumn">
								<MemberCard
									name="Trevor Sanderson"
									title="Senior Advisor"
									gradYear="2019"
									interests="Video Games, Fantasy Football, Rap music"
									funFact=""
									githubUrl="https://github.com/tjsande"
									linkedinUrl="https://www.linkedin.com/in/trevor-sanderson-459028171/"
									imagePath="/memberPhotos/Trevor.png"
								/>
							</div>
						</section>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CardContainer;
