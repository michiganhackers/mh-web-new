import React, { Component } from "react";
import "../../utility/fonts.css";
import "../../index.css";
import styled from "styled-components";
import { StaticH1 } from "../../utility/ContentStyles.js";
import GoogleLogo from "../../assets/google.png";
import C1Logo from "../../assets/c1.png";
import GraingerLogo from "../../assets/grainger.png";
import TargetLogo from "../../assets/target.png";
import SCM from "../../assets/SCM.jpg";

const Logo = styled.img`
	align: middle;
`;

class Sponsors extends Component {
	render() {
		return (
			<React.Fragment>
				<StaticH1>Our Top Sponsors</StaticH1>
				<div className="highsponsors">
					<Logo src={GoogleLogo} /> <Logo src={C1Logo} />
				</div>
				<div className="sponsors">
					<Logo src={GraingerLogo} /> <Logo src={TargetLogo} />{" "}
					<Logo src={SCM} />
				</div>
			</React.Fragment>
		);
	}
}

export default Sponsors;
