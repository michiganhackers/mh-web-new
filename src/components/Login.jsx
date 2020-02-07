import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const CLIENT_ID = "31598451640-9ch659ts8f0ik4mg5ag95213kr7ub4kr.apps.googleusercontent.com";

class Login extends Component {

    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseGoogleFailure = this.responseGoogleFailure.bind(this);
    }

    responseGoogle(response) {
        let uniqname = response.profileObj.email.split("@")[0];
        console.log(this.props);
        this.props.updateFunction(uniqname, response.accessToken);
    }

    responseGoogleFailure(response) {
        console.log("Login Failed");
    }

    render() {
        return (
            <React.Fragment>
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogleFailure}
                    cookiePolicy={"single_host_origin"}
                />
            </React.Fragment>
        );
    }
}

export default Login;
