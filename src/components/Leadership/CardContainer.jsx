import React from "react";
import "utility/fonts.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MemberCard from "./MemberCard.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";

const Cards = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const CardContainer = ({ people }) => {
    return (
        <Cards>
            {people.map((lead) => (
                <div key={lead.uniqname}>
                    <MemberCard
                        {...lead}
                        imageUrl={`${process.env.PUBLIC_URL}/${lead.imageUrl}`}
                    />
                </div>
            ))}
        </Cards>
    );
};

// class CardContainer extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             leadership: [],
//             categories: [],
//         };
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 {Object.keys(leadership).map((category, index) => (
//                     <div key={index}>
//                         <StaticH1>{category}</StaticH1>
//                         <div>
//                             <Cards>
//                                 {leadership[category].map((lead, index) => (
//                                     <div key={index}>
//                                         <MemberCard
//                                             {...lead}
//                                             imageUrl={`${process.env.PUBLIC_URL}/${lead.imageUrl}`}
//                                         />
//                                     </div>
//                                 ))}
//                             </Cards>
//                         </div>
//                     </div>
//                 ))}
//             </React.Fragment>
//         );
//     }
// }

// TODO: extract out lead type?
CardContainer.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object),
};

export default CardContainer;
