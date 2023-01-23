import React from "react";
import "utility/fonts.css";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
    const ButtonWrapper = styled.button`
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
        background-color: #ED8246;
        border-radius: 999px;
        ${devices.desktop`
            display: flex;
        `}
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    `;

    const ButtonIcon = styled.p`
        margin: 0;
        padding: 0;
        font-size: 3rem;
        color: white;
    `;

    const onButtonClick = e => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        window.history.replaceState(null, "", window.location.href.split("#")[0]);
    };

    return (
        <ButtonWrapper onClick={onButtonClick} title="Back to top">
            <ButtonIcon>
                <FontAwesomeIcon icon={["fas", "angle-up"]}/>
            </ButtonIcon>
        </ButtonWrapper>
    );
};

export default BackToTop;