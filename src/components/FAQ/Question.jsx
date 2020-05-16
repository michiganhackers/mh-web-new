import React from 'react';
import "../../utility/fonts.css";
import "../../index.css";
import { StaticP, StaticH1 } from "../../utility/ContentStyles.js";
import PropTypes from 'prop-types';

const Question = (props) => (
    <React.Fragment>
        <StaticH1>Q: {props.question}</StaticH1>
        <StaticP>{props.answer}</StaticP>
    </React.Fragment>
);

Question.defaultProps = {
    question: "",
    answer: ""
};

Question.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
};

export default Question;
