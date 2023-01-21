import React, { useState } from "react";
import styled from "styled-components";
import { StaticP } from "../../utility/ContentStyles.js";
import { addEmailFetch } from "./MailingListFetch";

const EmailForm = styled.form`
    text-align: center;
    margin: auto;
    padding-bottom: 24px;
`;
const EmailInputBox = styled.input`
    min-width: 250px;
    border: 2px solid #555;
    border-right: 0;
    height: 50px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 0 16px;
`;
const EmailSubmitButton = styled.input`
    color: white;
    border: 2px solid #555;
    border-left: 0;
    text-decoration: none;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;
    background: rgb(239, 133, 62);
    width: 60px;
    height: 50px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    &:hover {
      background: rgb(222, 103, 63);
    }
`;

export default function MailingList() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addEmailToList(e) {
    e.preventDefault();

    const payload = {
      Email: address,
    };
    /**
     * TODO: refactor when merging with attendance branch, which adds better email error handling.
     */
    addEmailFetch(payload);

    setAddress("");
    setSubmitted(true);
  }

  return (
    <EmailForm onSubmit={addEmailToList}>
      {submitted ? (
        <StaticP> Successfully Added! </StaticP>
      ) : null}
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
