import React from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import axios from 'axios';

import Tooltip from './Tooltip.jsx';

const getWidth = () => {
  return window.innerWidth / 4 < 400 ? 400 : window.innerWidth / 4;
}

const getLeft = ({location}) => {
  if (location) {
    let left = location[0] - getWidth() / 2;
    if (left < 10) { left = 10; }
    if (left > window.innerWidth - getWidth()) { left = window.innerWidth - getWidth() - 10; }
    return left;
  }
  return 0;
}

const getTop = ({location}) => {
  if (location) {
    return location[1] + 10;
  }
  return 0;
}

const TooltipWindow = styled(Tooltip)`
  position: absolute;
  left: ${getLeft}px;
  top: ${getTop}px;
  width: ${getWidth}px;
  z-index: 1;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {events: [], tooltipHidden: true, mouseLocation: [0, 0], eventClicked: null};
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  componentDidMount() {
    this.getCalendarEvents();
  }

  getCalendarEvents() {
    let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
    let API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;

    axios.get('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events?key=' + API_KEY)
      .then(res => {
        let items = res.data.items;
        let events = [];

        for (let item of items) {
          //console.log(items[i]);

          if (item.status !== "cancelled") {

            let event = {
              id: item.id,
              title: item.summary,
              url: item.htmlLink,
              description: item.description,
              start: item.start.dateTime || item.start.date,
              end: item.end.dateTime || item.end.date
            };

            events.push(event);
          }
        }

        this.setState({
          events: events
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleEventClick(event, jsEvent) {
    this.setState({
      mouseLocation: [jsEvent.pageX, jsEvent.pageY],
      tooltipHidden: false,
      eventClicked: event
    });
    return false;
  }

  render() {
    return (
      <React.Fragment>
        <FullCalendar
          height= {"auto"}
          header = {{
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,listMonth'
          }}
          defaultDate={'2015-09-12'}
          navLinks= {true} // can click day/week names to navigate views
          eventLimit= {3} // allow "more" link when too many events
          events = {this.state.events}
          eventColor = {this.props.calendarStyle.color}
          eventTextColor = {this.props.calendarStyle.textColor}
          eventClick = {
            this.handleEventClick.bind(this)
          }
          />
        <TooltipWindow location={this.state.mouseLocation} eventClicked={this.state.eventClicked} hidden={this.state.tooltipHidden} />
      </React.Fragment>
    );
  }
}

export default Calendar;
