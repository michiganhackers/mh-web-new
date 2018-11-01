import React from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const CALENDAR_ID = '8n8u58ssric1hmm84jvkvl9d68@group.calendar.google.com';
const API_KEY = 'AIzaSyD-UNSznwGRDtLZqizxTM1ku-9YS0DZkcQ';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {events: []};
  }

  componentDidMount() {
    this.getCalendarEvents();
  }

  getCalendarEvents() {
    axios.get('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events?key=' + API_KEY)
      .then(res => {
        let items = res.data.items;
        let events = [];

        for (var i = 0; i < items.length; i++) {
          //console.log(items[i]);

          if (items[i].status === "cancelled") {
            continue;
          }
          if ("dateTime" in items[i].start) {
            events.push({
              id: items[i].id,
              title: items[i].summary,
              start: items[i].start.dateTime
            });
          } else {
            events.push({
              id: items[i].id,
              title: items[i].summary,
              start: items[i].start.date
            });
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

  render() {
    return (
      <div id="example-component">
        <FullCalendar
          height= {"auto"}
          header = {{
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          defaultDate={'2015-09-12'}
          navLinks= {true} // can click day/week names to navigate views
          eventLimit= {3} // allow "more" link when too many events
          events = {this.state.events}
          />
      </div>
    );
  }
}

export default Calendar;
