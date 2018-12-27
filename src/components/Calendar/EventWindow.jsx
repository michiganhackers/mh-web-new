import React from 'react';
import styled from 'styled-components';
import CalendarField from './CalendarField.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  word-wrap: break-word;
  -webkit-box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
  -webkit-border-radius: 2px;
  border-radius: 2px;
`;

const TitleContainer = styled.div`
  background-color: #F15D24;
  color: white;
  font-size: 1.2rem;
`;

const Title = styled.p`
  padding: 0px 20px 15px;
  margin-bottom: 0px;
`;

const ToolbarContainer = styled.div`
  overflow: hidden;
  padding: 10px 10px 10px;
`;

const CalendarButton = styled.div`
  & {
    height: 40px;
    line-height: 40px;
    width: 40px;
    float: right;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    margin-left: 5px;
    position: relative;
  }
  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    background: rgba(255,255,255,0.3);
    opacity: 0;
    transition: all 0.2s;
  }
  &:hover:before {
    opacity: 1;
  }
`;

const BodyContainer = styled.div`
  overflow-wrap: break-word;
  word-break: break-word;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  padding: 10px;
`;

const DATE_FORMAT = "dddd, MMMM D"
const TIME_FORMAT = "h:mma"

class EventWindow extends React.Component {

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.openLink = this.openLink.bind(this);
    this.formatDateTime = this.formatDateTime.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeWindow(event, this);
    }
  }

  openLink() {
    window.open(this.props.eventClicked.url, '_blank');
  }

  formatDateTime(start, end, hasTime) {
    let startDate = start.format(DATE_FORMAT);
    let endDate;
    if (end) {
      endDate = end.format(DATE_FORMAT);
    }

    if (hasTime) {
      if (!endDate) {
        return startDate + ', ' + start.format(TIME_FORMAT);
      }
      if (startDate !== endDate) {
        return startDate + ', ' + start.format(TIME_FORMAT) + ' - ' + endDate + ', ' + end.format(TIME_FORMAT);
      }
      return startDate + ', ' + start.format(TIME_FORMAT) + ' - ' + end.format(TIME_FORMAT);
    }
    if (endDate && startDate !== endDate) {
      return startDate + ' - ' + endDate;
    }
    return startDate;

  }

  render() {
    if (!this.props.hidden) {
      return (
        <Wrapper className={this.props.className} ref={this.setWrapperRef}>
          <TitleContainer>
            <ToolbarContainer>
              <CalendarButton
                onClick={this.props.closeWindow}>
                &#10005;
              </CalendarButton>
              <CalendarButton
                onClick={this.openLink}>
                <FontAwesomeIcon icon="link" />
              </CalendarButton>
            </ToolbarContainer>
            <Title>{this.props.eventClicked.title}</Title>
          </TitleContainer>
          <BodyContainer>

            <CalendarField icon="clock" text={this.formatDateTime(this.props.eventClicked.start, this.props.eventClicked.end, this.props.eventClicked.hasTime)} />
            <CalendarField icon="map-marker-alt" text={this.props.eventClicked.location} />
            <CalendarField icon="list-ul" text={this.props.eventClicked.description} />

          </BodyContainer>
        </Wrapper>
      );
    } else {
      return null;
    }
  }
}

export default EventWindow;
