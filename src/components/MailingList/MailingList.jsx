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
    border: #555555 solid 2px;
`;
const EmailSubmitButton = styled.input`
    background-color: #f15d24;
    color: white;
    border: none;
    text-decoration: none;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;
    min-width: 50px;
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
      />
      <EmailSubmitButton type="submit" value="Join" />
    </EmailForm>
  );
}
