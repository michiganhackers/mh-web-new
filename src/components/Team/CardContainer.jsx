import React from 'react';
import "../../utility/fonts.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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

const Cards = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const CarouselContainer = styled.div`
    width: 45%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    @media all and (min-width: 214px) and (max-width: 600px) {
        width: 90%;
    }
`;

const Legend = styled.p`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    color: white;
    font-size: 48px;
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
            categories: []
        };
        this.getLeadership = this.getLeadership.bind(this);
    }

    getLeadership() {
        const params = {
            spreadsheetId: process.env.REACT_APP_LEADERSHIP_ID,
            range: "Sheet1!A1:AA998",
        };
         
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <CarouselContainer>
                    <Carousel autoplay>
                        <div>
                            <img src={CoreTeam} />
                            <Legend className="legend">The entire 2019-2020 Core Team!</Legend>
                        </div>
                        <div>
                            <img src={Squad} />
                            <Legend className="legend">Festifall 2019</Legend>
                        </div>
                        <div>
                            <img src={ErichHands} />
                            <Legend className="legend">Paint the Rock 2019</Legend>
                        </div>
                        <div>
                            <img src={Bros} />
                            <Legend className="legend">Mass Meeting 2019</Legend>
                        </div>
                        <div>
                            <img src={PaintTheRockGroup} />
                            <Legend className="legend">Paint the Rock 2019</Legend>
                        </div>
                        <div>
                            <img src={JanetBubbles} />
                            <Legend className="legend">Hands up!</Legend>
                        </div>
                        <div>
                            <img src={Escapade} />
                            <Legend className="legend">Escapade 2019</Legend>
                        </div>
                        <div>
                            <img src={Smoothie} />
                            <Legend className="legend">Smoothie Party 2019</Legend>
                        </div>
                        <div>
                            <img src={PaulBubble} />
                            <Legend className="legend">Paul being introspective</Legend>
                        </div>
                        <div>
                            <img src={MichiganRock} />
                            <Legend className="legend">Paint the Rock 2019</Legend>
                        </div>
                    </Carousel>
                </CarouselContainer>
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
