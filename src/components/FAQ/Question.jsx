import React from 'react';
import "../../utility/fonts.css";
import "../../index.css";
import { StaticP, StaticH1 } from "../../utility/ContentStyles.js";

/* class Question extends Component {
    render() {
        return (
            <React.Fragment>
                <StaticH1>Q: {this.props.question}</StaticH1>
                <StaticP>{this.props.answer}</StaticP>
            </React.Fragment>
        );
    }
} */

const Question = (props) => (
    <React.Fragment>
        <StaticH1>Q: {props.question}</StaticH1>
        <StaticP>{props.answer}</StaticP>
    </React.Fragment>
);

export default Question;
