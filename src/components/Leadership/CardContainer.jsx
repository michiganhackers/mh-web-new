import React from "react";
import "../../utility/fonts.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MemberCard from "./MemberCard.jsx";
import styled from "styled-components";

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
        };
    }

    render() {
        return (
            <React.Fragment>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
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
