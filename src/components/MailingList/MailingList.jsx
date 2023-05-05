import React, { useState } from "react";
import styled from "styled-components";
import { StaticP } from "utility/ContentStyles.js";

const EmailForm = styled.form`
    text-align: center;
    margin: auto;
    padding-bottom: 24px;
`;
const EmailInputBox = styled.input`
    min-width: 250px;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    border-color: ${props => props.theme.border};
    border-width: 2px;
    border-style: solid;
    border-right: 0;
    height: 50px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 16px;
`;
const EmailSubmitButton = styled.input`
    color: ${props => props.theme.textAlt};
    border-color: ${props => props.theme.border};
    border-width: 2px;
    border-style: solid;
    border-left: 0;
    text-decoration: none;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;
    background-color: ${props => props.theme.backgroundAlt};
    width: 60px;
    height: 50px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${props => props.theme.backgroundAltHover};
    }
`;

export default function MailingList() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);

  async function addEmailToList(e) {
    e.preventDefault();
    setResult(null);

    // make email post request
    const response = await fetch('https://api.michhackers.com/email/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: address
      })
    });

    // handle error
    if (response.status !== 200) {
      setResult(`An error occured: ${response.status} ${response.statusText}`);
      return;
    }

    // handle successful response
    setAddress("");
    setResult("Successfully added!");
  }

  return (
    <EmailForm onSubmit={addEmailToList}>
      {result && <StaticP>{result}</StaticP>}
      <EmailInputBox
        type="email"
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="michiganhackers@umich.edu"
        required
      />
      <EmailSubmitButton type="submit" value="Join" />
    </EmailForm>
  );
}
