// Libraries
import React from "react";
import PropTypes from "prop-types";

const SongsList = ({ songs }) => {
  console.log("songs");
  let renderedSongs = null;
  if (songs.length > 0) {
    renderedSongs = songs.map((song) => {
      return (
        <div className="ui center aligned">
          <div className="ui column blue inverted segment">
            <p>{song}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="ui grid equal width center aligned padded grid">
      <div className="ui grid center">
        <p>Titles Songs</p>
      </div>
      {renderedSongs}
    </div>
  );
};

SongsList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SongsList;
