import React from 'react';
import "../../utility/fonts.css";
import "../../index.css";
import { CopyP, CopyH1 } from "../../utility/ContentStyles.js";
import PropTypes from 'prop-types';

const Question = (props) => (
    <React.Fragment>
        <CopyH1>Q: {props.question}</CopyH1>
        {props.answer.split("\n").map((p, i) => <CopyP key={i}>{p}</CopyP>)}
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
