import React from "react";
import styled, { useTheme } from "styled-components";
import "utility/fonts.css";
import "index.css";
import { CopyP } from "utility/ContentStyles.js";
import PropTypes from "prop-types";
import { Opener } from "./FAQSVGBackgrounds.jsx";

//set the size of the icon in pixels
const LIST_ITEM_ICON_SIZE = 24;
const LIST_ITEM_ICON_PADDING = 16;

const DetailsElement = styled.details`
  color: ${(props) => props.theme.text};

  // we can't use the normal list-style-image because we can't control it
  summary::before {
    display: inline-block;
    width: ${LIST_ITEM_ICON_SIZE + LIST_ITEM_ICON_PADDING}px;
    height: ${LIST_ITEM_ICON_SIZE}px;
    background: url(${(props) => props.opener}) no-repeat;
    background-size: contain;
    content: "";
    transition: transform 0.5s ease-out;
    // by making our element wider and changing the origin, we can preserve
    //  the horizontal spacing between the icon and question
    margin-left: -${LIST_ITEM_ICON_SIZE + LIST_ITEM_ICON_PADDING}px;
    transform-origin: ${LIST_ITEM_ICON_SIZE / 2}px ${LIST_ITEM_ICON_SIZE / 2}px;
    vertical-align: bottom;
  }
  // this enables moving the marker relatively
  position: relative;
  &[open] summary ~ * {
    animation: details-open 0.5s ease-in-out;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  &[open] summary::before {
    transform: rotate(-180deg);
  }
  &[close] summary ~ * {
    animation: details-close 0.5s ease-in-out;
  }
  border-bottom: solid 3px ${(props) => props.theme.border};
  padding: 8px 0;
  * {
    margin-left: ${LIST_ITEM_ICON_SIZE + LIST_ITEM_ICON_PADDING}px;
  }
`;

function Details({ children }) {
  const { svg: svgTheme } = useTheme();
  return <DetailsElement opener={Opener(svgTheme)}>{children}</DetailsElement>;
}

const Summary = styled.summary`
  list-style: none;
  font-weight: bold;
  font-size: 1.2em;
  color: ${(props) => props.theme.heading};
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
