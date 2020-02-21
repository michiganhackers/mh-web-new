import React from 'react';
import styled from 'styled-components';
import { StaticP } from "../../utility/ContentStyles.js";
import { addEmailFetch } from './MailingListFetch';

const EmailForm = styled.form`
    text-align: center;
`;
const EmailInputBox = styled.input`
    min-width: 250px;
    size: 30px
`;
const EmailSubmitButton = styled.input`
    background-color: #F15D24;
    color: white;
    border: none;
    text-decoration: none;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;
    min-width: 50px;
    margin-top: 10px;
`;

class MailingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '', submitted: false };

        this.handleChange = this.handleChange.bind(this);
        this.addEmailToList = this.addEmailToList.bind(this);
    }

    addEmailToList(e) {
        e.preventDefault();

        const payload = {
            Email: this.state.address
        };
        /**
         * TODO: refactor when merging with attendance branch, which adds better email error handling.
         */
        addEmailFetch(payload);
        
        this.setState({
            address: "",
            submitted: true
        });
    }

    handleChange(event) {
        this.setState({ address: event.target.value });
    }

    render() {
        return(
            <EmailForm onSubmit={this.addEmailToList}>
                <StaticP>
                Join our mailing list! You&apos;ll receive weekly updates from us detailing upcoming events, tech talks, hackathons, and news.
                </StaticP>
                {this.state.submitted ? <StaticP> Successfully Added! </StaticP> : null}
                <EmailInputBox type="email" value={this.state.address} onChange={this.handleChange} placeholder="michiganhackers@umich.edu"/>
                <EmailSubmitButton type="submit" value="Join"/>
            </EmailForm>
        );
    }
}

export default MailingList;
