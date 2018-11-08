import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
        this.state =  {address: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addEmailToList = this.addEmailToList.bind(this);
    }

    addEmailToList(e){
        e.preventDefault();

        let secret_key = process.env.REACT_APP_MAILJET_SECRET;
        let public_key = process.env.REACT_APP_MAILJET_PUBLIC;

        // axios({
        //     method: 'post',
        //     url: 'https://api.mailjet.com/v3/REST/contactslist/:id/managecontact',
        //     auth: {
        //         username: public_key,
        //         password: secret_key
        //     },
        //     data: {
        //         "Email": this.state.address, 
        //         "Action": "addnoforce"
        //     }
        //   }).then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        
        this.setState({
            address: ""
        })
    }

    handleChange(event) {
        this.setState({address: event.target.value});
    }

    render(){
        return(
            <EmailForm onSubmit={this.addEmailToList}>
                Join our mailing list! You'll receive weekly updates from us detailing upcoming events, tech talks, hackathons, and news.
                <br/>
                <EmailInputBox type="email" value={this.state.address} onChange={this.handleChange} placeholder="michiganhackers@umich.edu"/>
                <EmailSubmitButton type="submit" value="Join"/>
            </EmailForm>
        )
    }
}

export default MailingList;