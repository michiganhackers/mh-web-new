import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const EmailForm = styled.form`
    text-align: center;
    padding-bottom: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const EmailInputBox = styled.input`
    min-width: 250px;
    border: 2px solid #555;
    border-right: 0;
    height: 50px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 16px;
`;

const EmailSubmitButton = styled.button`
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
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    &:hover {
        background: rgb(222, 103, 63);
    }
    &:disabled {
        background: #aaa;
    }
    &:disabled:hover {
        cursor: not-allowed;
    }
`;

const LoadingAnimation = styled.span`
    ${(props) => (props.active ? "animation: spin 2s linear infinite;" : "")}
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;

const READY_STATUS = "ready";
const LOADING_STATUS = "loading";
const SUCCESS_STATUS = "success";
const FAILURE_STATUS = "failure";

const statusToTitle = {};
statusToTitle[READY_STATUS] = "Send";
statusToTitle[LOADING_STATUS] = "Sending...";
statusToTitle[SUCCESS_STATUS] = "Sent!";
statusToTitle[FAILURE_STATUS] = "Failed to send";

export default function MailingList() {
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState(READY_STATUS);
    const [disabled, setDisabled] = useState(false);

    async function addEmailToList(e) {
        e.preventDefault();
        setStatus(LOADING_STATUS);
        setDisabled(true);
        //make email post request
        const response = await fetch("https://api.michhackers.com/email/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: address,
            }),
        });

        // handle error
        if (response.status !== 200) {
            setStatus(FAILURE_STATUS);
            setDisabled(false);
            console.error(
                `An error occured: ${response.status} ${response.statusText}`
            );
            return;
        }
        setStatus(SUCCESS_STATUS);
        setAddress("");
        setDisabled(false);
    }

    return (
        <EmailForm onSubmit={addEmailToList}>
            <EmailInputBox
                type="email"
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value);
                    setStatus(READY_STATUS);
                    setDisabled(false);
                }}
                placeholder="michiganhackers@umich.edu"
                required
            />
            <EmailSubmitButton
                type="submit"
                disabled={disabled}
                title={statusToTitle[status]}
            >
                <LoadingAnimation active={status === LOADING_STATUS}>
                    {status === LOADING_STATUS ? (
                        <FontAwesomeIcon icon={["fas", "spinner"]} />
                    ) : status === READY_STATUS ? (
                        <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                    ) : status === SUCCESS_STATUS ? (
                        <FontAwesomeIcon icon={["fas", "check"]} />
                    ) : (
                        <FontAwesomeIcon icon={["fas", "times"]} />
                    )}
                </LoadingAnimation>
            </EmailSubmitButton>
        </EmailForm>
    );
}
