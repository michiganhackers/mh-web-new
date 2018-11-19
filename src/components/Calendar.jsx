import React from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import Tooltip from './Tooltip.jsx';

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

        for (var i = 0; i < items.length; i++) {
          //console.log(items[i]);

          if (items[i].status === "cancelled") {
            continue;
          }

          let event = {
            id: items[i].id,
            title: items[i].summary,
            url: items[i].htmlLink,
            description: items[i].description,
            start: items[i].start.dateTime || items[i].start.date,
            end: items[i].end.dateTime || items[i].end.date
          };

          events.push(event);
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

    /*if (event.url) {
      window.open(event.url);
      return false;
    }*/
  }

  render() {
    return (
      <div>
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
          eventColor = {this.props.style.color}
          eventTextColor = {this.props.style.textColor}
          eventClick = {
            this.handleEventClick.bind(this)
          }
          />
        <Tooltip eventClicked={this.state.eventClicked} location={this.state.mouseLocation} hidden={this.state.tooltipHidden} />
      </div>
    );
  }
}

export default Calendar;
