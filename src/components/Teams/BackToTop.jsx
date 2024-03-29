import React, { useEffect, useState } from "react";
import "utility/fonts.css";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubTheme } from "components/ThemeComponents.jsx";

const ButtonWrapper = styled.a`
  z-index: 9;
  display: none;
  bottom: 1.5rem;
  right: 1.5rem;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 4rem;
  height: 4rem;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: ${(props) => props.theme.background};
  border-radius: 999px;
  ${devices.desktop`
        ${(props) => props.visible && "display: flex;"}
    `}
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
`;

const ButtonIcon = styled.p`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: ${(props) => props.theme.icon};
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(true);

  const onButtonClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.href.split("#")[0]);
  };

  const onScroll = () => {
    setVisible(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SubTheme name="backToTop">
      <ButtonWrapper
        onClick={onButtonClick}
        href="/teams"
        title="Back to top"
        visible={visible}
      >
        <ButtonIcon>
          <FontAwesomeIcon icon={["fas", "angle-up"]} />
        </ButtonIcon>
      </ButtonWrapper>
    </SubTheme>
  );
};

export default BackToTop;
