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
  background-color: #ef5b2e;
  color: white;
  padding: 25px 20px 10px;
  font-size: 1.2rem;
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

class Tooltip extends React.Component {

  render() {
    if (!this.props.hidden) {
      return (
        <Wrapper className={this.props.className}>
          <TitleContainer>
            <p>{this.props.eventClicked.title}</p>
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
                <FontAwesomeIcon icon="clock" />
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

export default Tooltip;
