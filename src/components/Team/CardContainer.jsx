import React from 'react';
import "../../utility/fonts.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MemberCard from './MemberCard.jsx';
import styled from 'styled-components';

import CoreTeam from '../../assets/CoreTeam.JPG';
import Squad from '../../assets/Squad.JPG';
import Bros from '../../assets/Bros.JPG';
import PaintTheRockGroup from '../../assets/PaintTheRockGroup.JPG';
import PaulBubble from '../../assets/PaulBubble.JPG';
import JanetBubbles from '../../assets/JanetBubbles.JPG';
import Escapade from '../../assets/Escapade.JPG';
import ErichHands from '../../assets/ErichHands.JPG';
import Smoothie from '../../assets/Smoothie.jpg';
import MichiganRock from '../../assets/MichiganRock.JPG';
import MassMeeting2021 from '../../assets/MassMeeting2021.jpg';
import Festifall2021 from '../../assets/Festifall2021.jpg';
import Festifall2021_1 from '../../assets/Festifall2021_1.jpg';
import ImageCarousel from "./ImageCarousel";

const Cards = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const LEADERSHIP_FIELD_TO_COL = {
    name: 0,
    uniqname: 1,
    title: 2,
    gradYear: 3,
    interests: 4,
    funFact: 5,
    linkedinUrl: 6,
    githubUrl: 7,
    personalUrl: 8,
    facebookUrl: 9,
    instagramUrl: 10,
    imageUrl: 11,
    display: 12
};

class CardContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            leadership: [],
            categories: [],
            images: [
                { url: MassMeeting2021, description: "Mass Meeting 2021" },
                { url: Festifall2021, description: "Our Festifall 2021 booth" },
                { url: Festifall2021_1, description: "Team leads at our Festifall 2021 booth" },
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
        this.getLeadership = this.getLeadership.bind(this);
    }

    getLeadership() {
        const params = {
            spreadsheetId: process.env.REACT_APP_LEADERSHIP_ID,
            range: "Sheet1!A1:AA998",
        };
        // for me, eslint likes to stop compilation unless I inline this, even
        //  if it's in the config file
        /*global gapi:readonly*/
        gapi.client.sheets.spreadsheets.values.get(params)
            .then(response => {
                const categories = [];
                // Do a pass to find the categories. Categories must be nonempty.
                response.result.values.forEach((row, index) => {
                    if (row[0] === "CATEGORY") {
                        categories.push({
                            name: row[1],
                            startIndex: index
                        });
                    }
                });
                this.setState({
                    categories,
                    leadership: response.result.values
                });
            }, error => {
                console.log("error: " + error.result.error.message);
            });
    }

    componentDidMount() {
        const gapiScript = document.createElement('script');
        gapiScript.src = 'https://apis.google.com/js/api.js?onload=onGapiLoad';
        document.body.appendChild(gapiScript);
        window.onGapiLoad = () => {
            /*global gapi:readonly*/
            gapi.load("client", () => {
                gapi.client.init({
                    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                    scope: "https://www.googleapis.com/auth/spreadsheets", 
                    discoveryDocs : [ "https://sheets.googleapis.com/$discovery/rest?version=v4" ],
                }).then(this.getLeadership);
            });
        };
    }

    render() {
        return (
            <React.Fragment>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <ImageCarousel images={this.state.images}/>
                {this.state.categories.map((category, index) => (
                    <div key={index}>
                        <StaticH1>
                            {category.name}
                        </StaticH1>
                        <div>
                            <Cards>
                                {(() => {
                                    const leadersInCategory = [];
                                    const nextCategoryStart = (index === this.state.categories.length - 1) ?
                                        this.state.leadership.length :
                                        this.state.categories[index + 1].startIndex;
                                    for (let i = category.startIndex + 1; i < nextCategoryStart; ++i) {
                                        leadersInCategory.push(i);
                                    }
                                    return leadersInCategory.map(index => {
                                        const row = this.state.leadership[index];
                                        if (row[0] === "") {return null;} // empty row
                                        if (row[LEADERSHIP_FIELD_TO_COL["display"]] !== "Y") {
                                            return null;
                                        }
                                        const props = {};
                                        for (const item in LEADERSHIP_FIELD_TO_COL) {
                                            if (row[LEADERSHIP_FIELD_TO_COL[item]] !== "") {
                                                props[item] = row[LEADERSHIP_FIELD_TO_COL[item]];
                                            }
                                        }
                                        return (
                                            <div key={index}>
                                                <MemberCard {...props}/>
                                            </div>
                                        );
                                    });
                                })()}
                            </Cards>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }

}

export default CardContainer;
