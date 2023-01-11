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

/**
 * Display a collection of club members
 * Can accept other html props and pass them down
 *
 * @constructor
 * @param props Other html attributes to use
 * @param props.people {[{}]} The people to display
 */
const CardContainer = (props) => {
    return (
        <Cards {...props}>
            {props.people.map((lead) => (
                <MemberCard
                    {...lead}
                    key={lead.uniqname}
                    imageUrl={`${process.env.PUBLIC_URL}/${lead.imageUrl}`}
                />
            ))}
        </Cards>
    );
};

// TODO: extract out lead type?
CardContainer.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object),
};

export default CardContainer;
