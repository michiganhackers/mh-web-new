import React from 'react';
import styled from 'styled-components';
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
    margin-left: 20px;
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

class EventWindow extends React.Component {

  render() {
    if (!this.props.hidden) {
      return (
        <Wrapper className={this.props.className}>
          <TitleContainer>
            <ToolbarContainer>
              <CalendarButton
                onClick={this.props.closeWindow}>
                &#10005;
              </CalendarButton>
            </ToolbarContainer>
            <Title>{this.props.eventClicked.title}</Title>
          </TitleContainer>
          <BodyContainer>

            <CalendarFieldContainer>
              <IconContainer>
                <FontAwesomeIcon icon="list-ul" />
              </IconContainer>
              <CalendarTextContainer>
                <span>{this.props.eventClicked.description}</span>
              </CalendarTextContainer>
            </CalendarFieldContainer>

            <CalendarFieldContainer>
              <IconContainer>
                <FontAwesomeIcon icon="link" />
              </IconContainer>
              <CalendarTextContainer>
                <a href={this.props.eventClicked.url}>{this.props.eventClicked.url}</a>
              </CalendarTextContainer>
            </CalendarFieldContainer>

          </BodyContainer>
        </Wrapper>
      );
    } else {
      return null;
    }
  }
}

export default EventWindow;
