var React = require("react");
var PropTypes = require("prop-types");
var PlayerInput = require("./PlayerInput");
var PlayerPreview = require("./PlayerPreview");

function Player(props) {
  var id = props.id;
  var label = props.label;
  var avatar = props.avatar;
  var username = props.username;
  var handleReset = props.handleReset;
  var handleSubmit = props.handleSubmit;
  return (
    <>
      {!username && (
        <PlayerInput
          id={id}
          label={label}
          onSubmit={handleSubmit}
        />
      )}
      {avatar !== null && (
        <PlayerPreview
          id={id}
          avatar={avatar}
          username={username}
          onReset={handleReset}
        />
      )}
    </>
  );
}

Player.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  username: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

Player.defaultProps = {
  avatar: null,
  username: null
};

module.exports = Player;
