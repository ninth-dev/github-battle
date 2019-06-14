import React from "react";
import PropTypes from "prop-types";
import { PlayerInput } from "./PlayerInput";
import { PlayerPreview } from "./PlayerPreview";

export const Player = ({
  id,
  label,
  avatar,
  username,
  handleReset,
  handleSubmit
}) => (
  <>
    {!username && <PlayerInput id={id} label={label} onSubmit={handleSubmit} />}
    {avatar !== null && (
      <PlayerPreview avatar={avatar} username={username}>
        <button className="reset" onClick={handleReset.bind(null, id)}>
          Reset
        </button>
      </PlayerPreview>
    )}
  </>
);

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
