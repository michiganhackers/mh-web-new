import React from 'react';
import Moment from 'moment';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import axios from 'axios';

import EventWindow from './EventWindow.jsx';

const DEFAULT_EVENT_WINDOW_WIDTH = 400;
const EVENT_WINDOW_H_OFFSET = 10;
const EVENT_WINDOW_V_OFFSET = 2;

const getWidth = () => {
  if (window.innerWidth / 4 < DEFAULT_EVENT_WINDOW_WIDTH) {
    if (window.innerWidth < DEFAULT_EVENT_WINDOW_WIDTH) {
      return window.innerWidth;
    }
    return DEFAULT_EVENT_WINDOW_WIDTH;
  }
  return window.innerWidth / 4;
}

const getLeft = ({location}) => {
  if (location) {
    let left = location.right + EVENT_WINDOW_H_OFFSET;
    if (left > window.innerWidth - getWidth()) {
      left = location.left - getWidth() - EVENT_WINDOW_H_OFFSET;
      if (left < 0) {
        left = (window.innerWidth - getWidth()) / 2;
      }
    }
    return left;
  }
  return 0;
}

const getTop = ({location}) => {
  if (location) {
    if (getWidth() === window.innerWidth || (location.right + EVENT_WINDOW_H_OFFSET > window.innerWidth - getWidth() && location.left - getWidth() - EVENT_WINDOW_H_OFFSET < 0)) {
      return location.bottom + EVENT_WINDOW_V_OFFSET;
    }
    return location.top - EVENT_WINDOW_V_OFFSET;
  }
  return 0;
}

const CalendarEventWindow = styled(EventWindow)`
  position: absolute;
  left: ${getLeft}px;
  top: ${getTop}px;
  width: ${getWidth}px;
  z-index: 1;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      eventHidden: true,
      eventLocation: {},
      eventClicked: null,
      dateOffset: 0,
      dateContext: 'month'
    };
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.getCalendarFormatName = this.getCalendarFormatName.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
    this.closeEventWindow = this.closeEventWindow.bind(this);
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
          //console.log(item);

          if (item.status !== "cancelled") {

            let event = {
              id: item.id,
              title: item.summary,
              url: item.htmlLink,
              description: item.description,
              start: item.start.dateTime || item.start.date,
              end: item.end.dateTime || item.end.date,
              hasTime: item.end.dateTime,
              location: item.location
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
        console.log("Error: events could not be loaded");
      });
  }

  handleEventClick(event, jsEvent) {
    let calendarEventEl = Array.from(document.getElementsByClassName("fc-day-grid-event")).filter(elt => elt.getAttribute("href") === event.url);

    let rect = calendarEventEl[0].getBoundingClientRect();

    this.setState({
      eventLocation: rect,
      eventHidden: false,
      eventClicked: event
    });

    return false;
  }

  getCalendarFormatName(offsetName) {
    if (offsetName === "month") {
      return "month";
    }
    else if (offsetName === "week") {
      return "basicWeek";
    }
  }

  closeEventWindow(event) {
    console.log(event);
    if (event.target.className.includes("fc-title") || event.target.className.includes("fc-time")) {
      return;
    }
    if (event.target.className.includes("fc-button")) {
      setTimeout(() => this.setState({eventHidden: true}), 200);
      return;
    }
    this.setState({eventHidden: true});
  }

  render() {
    return (
      <React.Fragment>
        <FullCalendar
          height= {"auto"}
          header = {{
            left: 'customPrev,customNext customToday',
            center: 'title',
            right: 'customMonth,customWeek,listMonth'
          }}
          defaultDate={Moment([2015, 10, 15]).add(this.state.dateOffset, this.state.dateContext)} // default date set to November 15, 2015 for testing
          defaultView={this.getCalendarFormatName(this.state.dateContext)}
          navLinks= {true} // can click day/week names to navigate views
          eventLimit= {3} // allow "more" link when too many events
          events = {this.state.events}
          eventColor = {this.props.calendarStyle.color}
          eventTextColor = {this.props.calendarStyle.textColor}
          eventClick = {this.handleEventClick}
          customButtons = {{
            customNext: {
              text: '>',
              click: () => {
                this.setState({dateOffset: this.state.dateOffset+1});
              }
            },
            customPrev: {
              text: '<',
              click: () => {
                this.setState({dateOffset: this.state.dateOffset-1});
              }
            },
            customToday: {
              text: 'today',
              click: () => {
                this.setState({dateOffset: 0});
              }
            },
            customMonth: {
              text: 'month',
              click: () => {
                this.setState({dateContext: 'month', dateOffset: 0});
              }
            },
            customWeek: {
              text: 'week',
              click: () => {
                this.setState({dateContext: 'week', dateOffset: 0});
              }
            }
          }}
          />
          <CalendarEventWindow location={this.state.eventLocation} eventClicked={this.state.eventClicked} hidden={this.state.eventHidden} closeWindow={this.closeEventWindow}/>
      </React.Fragment>
    );
  }
}

export default Calendar;
