import React from 'react';

class Tooltip extends React.Component {

  render() {
    const width = 300;

    let top = this.props.location[1] + 10;
    let left = this.props.location[0] - width / 2;

    const TooltipStyle = {
      position: 'absolute',
      top: top,
      left: left,
      width: width,
      zIndex: 1,
      wordWrap: 'break-word',
      backgroundColor: 'white',
      border: '3px solid #ef5b2e'
    }

    if (!this.props.hidden) {
      return (
        <div style={TooltipStyle}>
          <p>{this.props.eventClicked.description}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Tooltip;
