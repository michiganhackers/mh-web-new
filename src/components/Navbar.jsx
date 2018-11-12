import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoUrl from '../assets/logo.png'; // webpack takes care of creating the appropriate path upon build. Prefer this to putting static assets in /public

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    height: 80px;
    alignItems: center;
    justify-content: space-between;
    background: rgb(241,93,36);
`;

const FlexWrapper = styled.div`
    display: flex;
    alignItems: center;
    justify-content: space-between;
    height: 90%;
    width: calc(100% - 72px);
    margin: 0 auto;
`;

const Logo = styled.img`
    margin: auto;
    height: 50px;
    display: block;
    paddingBottom: 5px;
`;

const NavContainer = styled.div`
    display: flex;
    alignItems: center;
    justify-content: flex-end;
`;

const HeaderNavLink = styled(NavLink)`
    margin: auto;
    marginLeft: 0;
    fontSize: 22px;
    padding: 2px 20px;
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
    }
`;

const LogoNavLink = styled(NavLink)`
    display: flex;
    justify-content: flex-start;
    fontSize: 22px;
    padding: 2px 20px;
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <FlexWrapper>
          <NavContainer>
            <HeaderNavLink to="/faq">
              faq
            </HeaderNavLink>
            <HeaderNavLink to="/about">
              about
            </HeaderNavLink>
            <HeaderNavLink to="/events">
              calendar
            </HeaderNavLink>
            <HeaderNavLink to="/contact">
              contact
            </HeaderNavLink>
          </NavContainer>
        </FlexWrapper>
      </Wrapper>
    );
  }
}

export default Navbar;
