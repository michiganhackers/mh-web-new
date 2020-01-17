import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <GoogleLogin
          clientId="31598451640-9ch659ts8f0ik4mg5ag95213kr7ub4kr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </React.Fragment>
    );
  }
}

export default Login;
