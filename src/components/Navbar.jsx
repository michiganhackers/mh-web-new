import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import devices from "../utility/MediaQueries.js";
import logoUrl from "../assets/logo.png"; // webpack takes care of creating the appropriate path upon build. Prefer this to putting static assets in /public
import Login from "./Login.jsx";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  paddingtop: 15px;
  paddingbottom: 15px;
  z-index: 100;
  display: flex;
  height: 80px;
  alignitems: center;
  justify-content: space-between;
  background: rgb(241, 93, 36);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

const FlexWrapper = styled.div`
  display: flex;
  alignitems: center;
  justify-content: space-between;
  height: 90%;
  width: calc(100% - 72px);
  margin: 0;
`;

const Logo = styled.img`
  margin: auto;
  height: 50px;
  display: block;
  paddingbottom: 5px;
`;

const NavContainer = styled.div`
  display: flex;
  alignitems: right;
  justify-content: flex-end;
`;

const HeaderNavLink = styled(NavLink)`
  margin: auto;
  marginleft: 0;
  font-size: 20px;
  ${devices.small`
      font-size: 18px;
    `}
  ${devices.tiny`
      font-size: 14px;
    `}
    padding: 2px 10px;
  ${devices.small`
      padding: 2px 6px;
    `}
  ${devices.tiny`
      padding: 2px 4px;
    `}
    color: white;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoNavLink = styled(NavLink)`
  display: flex;
  justify-content: left;
  fontsize: 22px;
  padding: 2px 10px;
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <FlexWrapper>
          <LogoNavLink to="/">
            <Logo src={logoUrl} />
          </LogoNavLink>
          <NavContainer>
            <HeaderNavLink to="/about">about</HeaderNavLink>
            <HeaderNavLink to="/team">team</HeaderNavLink>
            <HeaderNavLink to="/events">calendar</HeaderNavLink>
            <HeaderNavLink to="/contact">contact</HeaderNavLink>
            <HeaderNavLink to="/faq">faq</HeaderNavLink>
            <Login />
          </NavContainer>
        </FlexWrapper>
      </Wrapper>
    );
  }
}

export default Navbar;
