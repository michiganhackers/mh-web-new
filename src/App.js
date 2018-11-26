import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar.jsx';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faListUl, faClock);

const CalendarWrapper = styled.div`
  color: '#ef5b2e';
  textColor: 'white';
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CalendarWrapper>
          <Calendar />
        </CalendarWrapper>
      </React.Fragment>
    );
  }
}

export default App;
