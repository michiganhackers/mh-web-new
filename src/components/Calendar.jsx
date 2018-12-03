import React from 'react';
import Moment from 'moment';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import axios from 'axios';

import EventWindow from './EventWindow.jsx';

const getWidth = () => {
  return window.innerWidth / 4 < 400 ? 400 : window.innerWidth / 4;
}

const getLeft = ({location}) => {
  if (location) {
    let left = location.right + 10;
    if (left > window.innerWidth - getWidth()) { left = location.left - getWidth() - 10; }
    return left;
  }
  return 0;
}

const getTop = ({location}) => {
  if (location) {
    return location.top;
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
        // TODO ADD ERROR HANDLING
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

  closeEventWindow() {
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
          eventClick = {
            this.handleEventClick.bind(this)
          }
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
