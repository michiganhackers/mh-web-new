import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const CalendarFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 5px 10px 5px;
`;

const IconContainer = styled.div`
  float: left;
  flex: 1;
  margin: 0px 5px;
`;

const CalendarTextContainer = styled.div`
  flex: 10;
  margin: 0px 5px;
  font-size: 0.8rem;
`;

const MAX_DESCRIPTION_WORDS = 40;

class CalendarField extends React.Component {

    constructor(props) {
        super(props);

        this.truncate = this.truncate.bind(this);
        this.toggleExpanded = this.toggleExpanded.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            small: false,
            expanded: false
        };
    }

    componentDidMount() {
        this.update(this.props.text);
    }

    componentDidUpdate(prevProps) {
        if (this.props.text !== prevProps.text) {
            this.update(this.props.text);
        }
    }

    update(text) {
        const small = text && text.trim() !== ""
        && text.split(" ").length <= MAX_DESCRIPTION_WORDS;
        this.setState({ small: small, expanded: false });
    }

    truncate(text) {
        if (!this.state.small) {
            return text.split(" ").slice(0, MAX_DESCRIPTION_WORDS).join(" ");
        }
        return text;
    }

    toggleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        if (this.props.text && this.props.text.trim() !== "") {
            const buffer = [];

            if (this.props.link) {
                buffer.push(<a key="link" href={this.props.text}>{this.props.text}</a>);
            }
            else {
                if (this.state.small) {
                    buffer.push(
                        <span key="regular">{this.props.text}</span>
                    );
                }
                else if (!this.state.expanded) {
                    buffer.push(
                        <React.Fragment key="less">
                            <span>{this.truncate(this.props.text) + '...'}</span>
                            <br></br>
                            <a href="#" onClick={this.toggleExpanded}>See more</a>
                        </React.Fragment>
                    );
                }
                else {
                    buffer.push(
                        <React.Fragment key="more">
                            <span>{this.props.text}</span>
                            <br></br>
                            <a href="#" onClick={this.toggleExpanded}>See less</a>
                        </React.Fragment>
                    );
                }
            }

            return (
                <CalendarFieldContainer className={this.props.className}>
                    <IconContainer>
                        <FontAwesomeIcon icon={this.props.icon} />
                    </IconContainer>
                    <CalendarTextContainer>
                        {buffer}
                    </CalendarTextContainer>
                </CalendarFieldContainer>
            );
        }
        else {
            return null;
        }
    }
}

CalendarField.defaultProps = {
    text: "",
    link: "",
    className: "",
    icon: "clock"
};

CalendarField.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string
};

export default CalendarField;
