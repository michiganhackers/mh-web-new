import React from "react";
import styled from "styled-components";
import { StaticP } from "../../utility/ContentStyles.js";
import { addEmailFetch } from "./MailingListFetch";
import devices from "utility/MediaQueries.js";

const EmailForm = styled.form`
    text-align: center;
    margin: auto;
    width: min(60%, 600px);
    ${devices.tablet`
        width: min(80%, 600px);
    `}
    ${devices.small`
        width: min(90%, 600px);
    `}
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

class MailingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: "", submitted: false };

        this.handleChange = this.handleChange.bind(this);
        this.addEmailToList = this.addEmailToList.bind(this);
    }

    addEmailToList(e) {
        e.preventDefault();

        const payload = {
            Email: this.state.address,
        };
        /**
         * TODO: refactor when merging with attendance branch, which adds better email error handling.
         */
        addEmailFetch(payload);

        this.setState({
            address: "",
            submitted: true,
        });
    }

    handleChange(event) {
        this.setState({ address: event.target.value });
    }

    render() {
        return (
            <EmailForm onSubmit={this.addEmailToList}>
                {this.state.submitted ? (
                    <StaticP> Successfully Added! </StaticP>
                ) : null}
                <EmailInputBox
                    type="email"
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder="michiganhackers@umich.edu"
                />
                <EmailSubmitButton type="submit" value="Join" />
            </EmailForm>
        );
    }
}

export default MailingList;
