import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CalendarFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 5px 10px 5px;
`;

const IconContainer = styled.div`
  float: left;
  flex: 1;
  margin: 0px 5px;
`;

const CalendarTextContainer = styled.div`
  flex: 10;
  margin: 0px 5px;
  font-size: 0.8rem;
`;

const MAX_DESCRIPTION_WORDS = 40;

class CalendarField extends React.Component {

  constructor(props) {
    super(props);

    this.truncate = this.truncate.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);

    let small = this.props.text && this.props.text.trim() !== ""
        && this.props.text.split(" ").length <= MAX_DESCRIPTION_WORDS;

    this.state = {
      expanded: false,
      small: small
    };
  }

  truncate(text) {
    if (!this.state.small) {
      return text.split(" ").slice(0, MAX_DESCRIPTION_WORDS).join(" ");
    }
    return text;
  }

  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    if (this.props.text && this.props.text.trim() !== "") {
      let buffer = [];

      if (this.props.link) {
        buffer.push(<a key="link" href={this.props.text}>{this.props.text}</a>);
      }
      else {
        if (this.state.small) {
          buffer.push(
            <span key="regular">{this.props.text}</span>
          );
        }
        else if (!this.state.expanded) {
          buffer.push(
            <React.Fragment key="less">
              <span>{this.truncate(this.props.text) + '...'}</span>
              <br></br>
              <a href="#" onClick={this.toggleExpanded}>See more</a>
            </React.Fragment>
          );
        }
        else {
          buffer.push(
            <React.Fragment key="more">
              <span>{this.props.text}</span>
              <br></br>
              <a href="#" onClick={this.toggleExpanded}>See less</a>
            </React.Fragment>
          );
        }
      }

      return (
        <CalendarFieldContainer className={this.props.className}>
          <IconContainer>
            <FontAwesomeIcon icon={this.props.icon} />
          </IconContainer>
          <CalendarTextContainer>
            {buffer}
          </CalendarTextContainer>
        </CalendarFieldContainer>
      );
    }
    else {
      return null;
    }
  }
}

export default CalendarField;
