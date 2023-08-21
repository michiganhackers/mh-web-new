import React from "react";
import styled from "styled-components";

export default function Calendar() {
  return (
    <CalendarRoot>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=michiganhackers%40gmail.com&ctz=America%2FNew_York"
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
