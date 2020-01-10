import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {StaticP, StaticH1} from "../../utility/ContentStyles.js";

const EmailForm = styled.form`
    text-align: center;
`
const CodeInputBox = styled.input`
    min-width: 250px;
    size: 30px
`
const CodeSubmitButton = styled.input`
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

class AttendanceForm extends React.Component {
    constructor(props){
        super(props);
        this.state =  {code: '', submitted: false, uniqname: ''};

        this.handleChange = this.handleChange.bind(this);
        this.sendCode = this.sendCode.bind(this);
    }

    sendCode(e){
        
        e.preventDefault();

        let mh_backend = process.env.REACT_APP_MH_BACKEND_URL;

        let payload = {
            code: this.state.address,
            uniqname: this.state.uniqname
        };
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: mh_backend + '/v1/',
            data: JSON.stringify(payload)
          }).then(res => {

            })
            .catch(error => {
                console.log(error);
            });
        
        this.setState({
            code: "",
            submitted: true
        })
    }

    handleChange(event) {
        this.setState({code: event.target.value});
    }

    render(){
        return(
            <EmailForm onSubmit={this.sendCode}>
                <StaticP>
                Input the attendance code after signing in using your google account.
                </StaticP>
                {this.state.submitted ? <StaticP> Successfully Added! </StaticP> : null}
                <CodeInputBox type="email" value={this.state.code} onChange={this.handleChange} placeholder="Enter Code..."/>
                <CodeSubmitButton type="submit" value="Submit"/>
            </EmailForm>
        )
    }
}

export default AttendanceForm;