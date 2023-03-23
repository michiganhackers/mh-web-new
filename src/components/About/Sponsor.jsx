import React from "react";
import styled from "styled-components";
import devices from "utility/MediaQueries.js";

const SponsorWrapper = styled.div.attrs((props) => ({
    tier: props.tier,
}))`
    flex: 0 ${(props) => props.tier};
    flex-basis: ${(props) => {
        switch (props.tier) {
            case "1":
                return "350px";
            case "2":
                return "225px";
            case "3":
            case "4":
            default:
                return "200px";
        }
    }};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    padding: 15px 30px;
    ${devices.tablet`
      padding: 8px 20px;
      flex-basis: ${(props) => {
          switch (props.tier) {
              case "1":
                  return "275px";
              case "2":
                  return "200px";
              case "3":
              case "4":
              default:
                  return "150px";
          }
      }};
    `}
    ${devices.small`
      padding: 8px 10px;
      // Note the interaction between this and flex-basis
      margin: auto;
      width: ${(props) => {
          switch (props.tier) {
              case "1":
                  return "75%";
              case "2":
                  return "55%";
              case "3":
              case "4":
              default:
                  return "40%";
          }
      }};
      flex-basis: ${(props) => {
          switch (props.tier) {
              case "1":
                  return "150px";
              case "2":
                  return "100px";
              case "3":
              case "4":
              default:
                  return "75px";
          }
      }};
    `}
`;

const SponsorImage = styled.img`
    width: 100%;
    object-fit: contain;
    flex: 1;
`;

/**
 * Display a Sponsor
 * @constructor
 * @param {string} props.url The location of the sponsor's logo
 * @param {string} props.name The name of the sponsor
 * @param {"1","2","3","4"} props.tier The sponsor's tier. Determines logo size.
 *
 */
const Sponsor = (props) => (
    <SponsorWrapper tier={props.tier}>
        <SponsorImage src={props.url} alt={props.name + " logo"} />
    </SponsorWrapper>
);

export default Sponsor;
