import React from "react";
import "utility/fonts.css";

import Calendar from "./Calendar.jsx";
import Navbar from "components/Navbar.jsx";
import { SubTheme } from "components/ThemeComponents.jsx";
import Footer from "components/Footer.jsx";
import styled from "styled-components";

export default function Events() {
  return (
    <React.Fragment>
      <Navbar />
      <SubTheme name="events">
        <Content>
          <h1>Calendar</h1>
          <Calendar />
        </Content>
      </SubTheme>
      <Footer />
    </React.Fragment>
  );
}

const Content = styled.div`
  color: #fff;
  text-align: center;
`;
