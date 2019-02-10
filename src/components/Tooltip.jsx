import React from 'react';

class Tooltip extends React.Component {
  render() {
    if (!this.props.hidden) {
      return (
        <div><h1>Test</h1></div>
      );
    } else {
      return null;
    }
  }
}

export default Tooltip;
