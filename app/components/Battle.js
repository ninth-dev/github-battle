var React = require("react");
var PropTypes = require("prop-types");
var Link = require("react-router-dom").Link;
var Player = require("./Player");

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;
      return newState;
    });
  }

  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoImage = this.state.playerTwoImage;

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
              pathname: match.url + "/results",
              search:
                "?playerOneName=" +
                encodeURIComponent(playerOneName) +
                "&playerTwoName=" +
                encodeURIComponent(playerTwoName)
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}

module.exports = Battle;
