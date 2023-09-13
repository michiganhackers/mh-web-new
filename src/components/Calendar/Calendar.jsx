import React from "react";
import styled from "styled-components";

export default function Calendar() {
  return (
    <CalendarRoot>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=909ff6cc12130251f59ee890ee7ef3aedef47d3167a8df530fea96199c7db2d7%40group.calendar.google.com&ctz=America%2FNew_York"
        frameBorder="0"
        scrolling="no"
      />
    </CalendarRoot>
  );
}

const CalendarRoot = styled.div`
  padding: 0 32px 32px 32px;

  iframe {
    width: 100%;
    max-width: 700px;
    height: 500px;
  }
`;
