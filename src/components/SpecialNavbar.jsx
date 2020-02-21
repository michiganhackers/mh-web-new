import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import devices from '../utility/MediaQueries.js';

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    height: 80px;
    align-items: center;
    ${devices.small`
      align-items: center;
    `}
    justify-content: space-between;
    background: transparent;
    font-size: 20px;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    ${devices.small`
      align-items: center;
    `}
    flex-direction: row;
    justify-content: space-between;
    height: 90%;
    margin: 0 auto;
    width: calc(100% - 72px);
    ${devices.small`
      width: auto;
      flex-wrap: wrap;
    `}
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const HeaderNavLink = styled(NavLink)`
    margin: auto;
    marginLeft: 0;
    font-size: 22px;
    ${devices.small`
    font-size: 20px;
    `}
    ${devices.tiny`
    font-size: 18px;
    `}
    padding: 2px 20px;
    ${devices.small`
      padding: 2px 8px;
    `}
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
    }
`;

const SpecialNavbar = () => (
    <Wrapper>
        <FlexWrapper>
            <NavContainer>
                <HeaderNavLink to="/about">
					about
                </HeaderNavLink>
                <HeaderNavLink to="/team">
					team
                </HeaderNavLink>
                <HeaderNavLink to="/events">
					calendar
                </HeaderNavLink>
                <HeaderNavLink to="/contact">
					contact
                </HeaderNavLink>
                <HeaderNavLink to="/faq">
					faq
                </HeaderNavLink>
            </NavContainer>
        </FlexWrapper>
    </Wrapper>
);

export default SpecialNavbar;
