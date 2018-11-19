import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Tooltip extends React.Component {

  render() {
    const width = 400;

    let top = this.props.location[1] + 10;
    let left = this.props.location[0] - width / 2;
    if (left < 10) { left = 10; }
    if (left > window.innerWidth - width) { left = window.innerWidth - width - 10; }

    const TooltipStyle = {
      position: 'absolute',
      top: top,
      left: left,
      width: width,
      zIndex: 1
    }

    const TopTooltipStyle = {
      wordWrap: 'break-word',
      backgroundColor: '#ef5b2e',
      color: 'white',
      padding: '30px 20px 10px'
    }

    const BottomTooltipStyle = {
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #cccccc',
      padding: '10px'
    }

    const CalendarField = {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      margin: '5px 10px 5px'
    }

    const Icon = {
      float: 'left',
      flex: 1,
      margin: '0px 5px'
    }

    const CalendarFieldText = {
      flex: 10,
      margin: '0px 5px',
      fontSize: '0.8rem'
    }

    if (!this.props.hidden) {
      return (
        <div style={TooltipStyle}>
          <div style={TopTooltipStyle}>
            <p>{this.props.eventClicked.title}</p>
          </div>
          <div style={BottomTooltipStyle}>
            <div style={CalendarField}>
              <div style={Icon}>
                <FontAwesomeIcon icon="list-ul" />
              </div>
              <div style={CalendarFieldText}>
                <span>{this.props.eventClicked.description}</span>
              </div>
            </div>
            <div style={CalendarField}>
              <div style={Icon}>
                <FontAwesomeIcon icon="clock" />
              </div>
              <div style={CalendarFieldText}>
                <a href={this.props.eventClicked.url}>{this.props.eventClicked.url}</a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Tooltip;
