import React from "react";
import styled from "styled-components";
import "../../utility/fonts.css";
import "../../index.css";
import { CopyP } from "../../utility/ContentStyles.js";
import PropTypes from "prop-types";
import list_arrow from "assets/list_arrow.svg";
import list_arrow_blue from "assets/list_arrow_blue.svg";

//set the size of the icon in pixels
//  TODO: should maybe use rem instead?
const LIST_ITEM_ICON_SIZE = 24;
const LIST_ITEM_ICON_PADDING = 16;

const Details = styled.details`
    // we can't use the normal list-style-image because we can't control it
    summary::before {
        display: inline-block;
        width: ${LIST_ITEM_ICON_SIZE + LIST_ITEM_ICON_PADDING}px;
        height: ${LIST_ITEM_ICON_SIZE}px;
        background: url(${list_arrow}) no-repeat;
        background-size: contain;
        content: "";
        transition: transform 0.5s ease-in-out;
        // by making our element wider and changing the origin, we can preserve
        //  the horizontal spacing between the icon and question
        margin-left: -${LIST_ITEM_ICON_SIZE + LIST_ITEM_ICON_PADDING}px;
        transform-origin: ${LIST_ITEM_ICON_SIZE / 2}px
            ${LIST_ITEM_ICON_SIZE / 2}px;
        vertical-align: bottom;
    }
    // this enables moving the marker relatively
    position: relative;
    &:nth-of-type(even) summary::before {
        background-image: url(${list_arrow_blue});
    }
    &[open] summary ~ * {
        animation: details-open 0.5s ease-in-out;
    }

    &[open] summary::before {
        transform: rotate(-180deg);
        position: absolute;
        bottom: 12px;
    }
    &[close] summary ~ * {
        animation: details-close 0.5s ease-in-out;
    }
    border-bottom: solid 3px #555555;
    padding: 8px 0;
    * {
        margin-left: ${LIST_ITEM_ICON_SIZE + LIST_ITEM_ICON_PADDING}px;
    }
`;

const Summary = styled.summary`
    list-style: none;
    font-weight: bold;
    font-size: 1.2em;
`;

/**
 * Display a Q/A item
 * @constructor
 * @param props The question and answer
 */
const Question = (props) => (
    <Details>
        <Summary>{props.question}</Summary>
        {props.answer.split("\n").map((p, i) => (
            <CopyP key={i}>{p}</CopyP>
        ))}
    </Details>
);

Question.defaultProps = {
    question: "",
    answer: "",
};

Question.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
};

export default Question;
