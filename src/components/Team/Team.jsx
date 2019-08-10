import React from 'react';
import "../../utility/fonts.css";
import SubpageOuter from "../SubpageOuter/SubpageOuter.jsx";
import Navbar from '../Navbar.jsx';
import CardContainer from './CardContainer.jsx';

class Team extends React.Component {

    render(){
        return(
        <React.Fragment>
        <Navbar />
        <SubpageOuter header="our team">
        </SubpageOuter>
        <CardContainer />
        </React.Fragment>

        );
    }
}

export default Team;