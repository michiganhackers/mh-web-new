import React from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import Tooltip from './Tooltip.jsx';

const CALENDAR_ID = '8n8u58ssric1hmm84jvkvl9d68@group.calendar.google.com';
const API_KEY = 'AIzaSyD-UNSznwGRDtLZqizxTM1ku-9YS0DZkcQ';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {events: [], tooltipHidden: true};
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.setTooltipTrueState = this.setTooltipStateTrue.bind(this);
    this.setTooltipFalseState = this.setTooltipStateFalse.bind(this);
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

  setTooltipStateTrue() {
    this.setState({
      tooltipHidden: true,
    });
  }

  setTooltipStateFalse() {
    this.setState({
      tooltipHidden: false
    });
  }

  render() {
    return (
      <div>
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
          eventColor = {this.props.style.color}
          eventTextColor = {this.props.style.textColor}
          eventClick = {
            function(event) {
              if (event.url) {
                window.open(event.url);
                return false;
              }
            }
          }
          eventMouseover = {
            this.setTooltipStateFalse.bind(this)
          }
          eventMouseout = {
            this.setTooltipStateTrue.bind(this)
          }
          />
        <Tooltip hidden={this.state.tooltipHidden} />
      </div>
    );
  }
}

export default Calendar;
