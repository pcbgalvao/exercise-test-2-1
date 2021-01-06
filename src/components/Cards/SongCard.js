// Libraries
import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

const SongCard = ({ song }) => {
  return (
    <div className="ui item" key={uuid()}>
      <p>{song}</p>
    </div>
  );
};

SongCard.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SongCard;
