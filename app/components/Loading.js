import React from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    textAlign: "center",
    fontSize: "35px"
  }
};

export class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    const { text, speed } = this.props;
    this.interval = window.setInterval(() => {
      this.setState(prevState =>
        prevState.text === `${text}...`
          ? { text }
          : { text: prevState.text + "." }
      );
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}> {this.state.text}</p>;
  }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};
