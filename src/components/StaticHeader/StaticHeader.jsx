import React from 'react';
import styled from 'styled-components';
import devices from '../../utility/MediaQueries.js';

const Header = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: 900;
  line-height: 0.8;
  color: #EE5E30;
  display: block;
  text-align: center;
  font-size: 8vh;
  ${devices.small`
    padding-top: 20%;
  `}
  text-transform: uppercase;
  margin: 10vw 0 4vw 0;
`;

const HeaderOuter = styled.div``;

/* class StaticHeader extends Component {
    render() {
        return (
            <HeaderOuter>
                <Header>
                    {this.props.children}
                </Header>
            </HeaderOuter>
        );
    }
} */

const StaticHeader = (props) => (
    <HeaderOuter>
        <Header>
            {props.children}
        </Header>
    </HeaderOuter>
);

export default StaticHeader;
