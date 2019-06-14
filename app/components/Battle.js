import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Player } from "./Player";

export class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (id, username) {
    this.setState(() => ({
      [id + "Name"]: username,
      [id + "Image"]: `https://github.com/${username}.png?size=200`
    }));
  }
  handleReset(id) {
    this.setState(() => ({
      [id + "Name"]: "",
      [id + "Image"]: null
    }));
  };

  render() {
    const { match } = this.props;

    const {
      playerOneName,
      playerOneImage,
      playerTwoName,
      playerTwoImage
    } = this.state;

    return (
      <div>
        <div className="row">
          <Player
            id={"playerOne"}
            label={"Player One"}
            avatar={playerOneImage}
            username={playerOneName}
            handleReset={this.handleReset}
            handleSubmit={this.handleSubmit}
          />
          <Player
            id={"playerTwo"}
            label={"Player Two"}
            avatar={playerTwoImage}
            username={playerTwoName}
            handleReset={this.handleReset}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {playerOneImage && playerTwoImage && (
          <Link
            className="button"
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${encodeURIComponent(
                playerOneName
              )}&playerTwoName=${encodeURIComponent(playerTwoName)}`
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}
