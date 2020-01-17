import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";

const EmailForm = styled.form`
    text-align: center;
`
const EmailInputBox = styled.input`
    min-width: 250px;
    size: 30px
`
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
`

class MailingList extends React.Component {
    constructor(props){
        super(props);
        this.state =  {address: '', submitted: false, error: null};

        this.handleChange = this.handleChange.bind(this);
        this.addEmailToList = this.addEmailToList.bind(this);
        this.renderSuccessOrFailure = this.renderSuccessOrFailure.bind(this);
    }

    addEmailToList(e){
        
        e.preventDefault();

        let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;

        let payload = {
            Email: this.state.address
        };
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: mh_backend + '/v1/email/add',
            data: JSON.stringify(payload)
          }).then(res => {
                this.setState({
                    error: null,
                    submitted: true,
                    address: "",
                })
            })
            .catch(error => {
                this.setState({
                    error,
                });
            });
    }

    handleChange(event) {
        this.setState({address: event.target.value});
    }

    renderSuccessOrFailure() {
        if (this.state.error) {
            return <StaticP> There was an error in adding your email. Contact michiganhackers-exec@umich.edu if this persists. </StaticP>
        }
        else if (this.state.submitted) {
            return <StaticP> Successfully Added! </StaticP>;
        }
        return null;
    }

    render(){
        return(
            <EmailForm onSubmit={this.addEmailToList}>
                <StaticP>
                Join our mailing list! You'll receive weekly updates from us detailing upcoming events, tech talks, hackathons, and news.
                </StaticP>
                {this.renderSuccessOrFailure()}
                <EmailInputBox type="email" value={this.state.address} onChange={this.handleChange} placeholder="michiganhackers@umich.edu"/>
                <EmailSubmitButton type="submit" value="Join"/>
            </EmailForm>
        )
    }
}

export default MailingList;
