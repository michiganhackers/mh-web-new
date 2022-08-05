import React from "react";
import "../../utility/fonts.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MemberCard from "./MemberCard.jsx";
import styled from "styled-components";

import CoreTeam from "assets/carousel/CoreTeam.jpg";
import Squad from "assets/carousel/Squad.jpg";
import Bros from "assets/carousel/Bros.jpg";
import PaintTheRockGroup from "assets/carousel/PaintTheRockGroup.jpg";
import PaulBubble from "assets/carousel/PaulBubble.jpg";
import JanetBubbles from "assets/carousel/JanetBubbles.jpg";
import Escapade from "assets/carousel/Escapade.jpg";
import ErichHands from "assets/carousel/ErichHands.jpg";
import Smoothie from "assets/carousel/Smoothie.jpg";
import MichiganRock from "assets/carousel/MichiganRock.jpg";
import MassMeeting2021 from "assets/carousel/MassMeeting2021.jpg";
import Festifall2021 from "assets/carousel/Festifall2021.jpg";
import Festifall2021_1 from "assets/carousel/Festifall2021_1.jpg";
import ImageCarousel from "./ImageCarousel";

// we may want to switch this to using a global variable so the whole json can be updated by itself using public/
import leadership from "leadership.json";

const Cards = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

class CardContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            leadership: [],
            categories: [],
            images: [
                { url: MassMeeting2021, description: "Mass Meeting 2021" },
                { url: Festifall2021, description: "Our Festifall 2021 booth" },
                {
                    url: Festifall2021_1,
                    description: "Team leads at our Festifall 2021 booth",
                },
                { url: CoreTeam, description: "The entire 2019-2020 Team!" },
                { url: Squad, description: "Festifall 2019" },
                { url: ErichHands, description: "Paint the Rock 2019" },
                { url: Bros, description: "Mass Meeting 2019" },
                { url: PaintTheRockGroup, description: "Paint the Rock 2019" },
                { url: JanetBubbles, description: "Hands up!" },
                { url: Escapade, description: "Escapade 2019" },
                { url: Smoothie, description: "Smoothie Party 2019" },
                { url: PaulBubble, description: "Paul being introspective" },
                { url: MichiganRock, description: "Paint the Rock 2019" },
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <ImageCarousel images={this.state.images} />
                {Object.keys(leadership).map((category, index) => (
                    <div key={index}>
                        <StaticH1>{category}</StaticH1>
                        <div>
                            <Cards>
                                {leadership[category].map((lead, index) => (
                                    <div key={index}>
                                        <MemberCard
                                            {...lead}
                                            imageUrl={`${process.env.PUBLIC_URL}/${lead.imageUrl}`}
                                        />
                                    </div>
                                ))}
                            </Cards>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default CardContainer;
