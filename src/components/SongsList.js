// Libraries
import React from "react";
import uuid from "react-uuid";

const SongsList = ({ albumPicked }) => {
  const { songs, author, name } = albumPicked;
  let renderedSongs = null;
  if (!!songs && songs.length > 0) {
    renderedSongs = songs.map((song) => {
      return (
        <div className="ui item center aligned" key={uuid()}>
          <div className="ui column blue inverted segment">
            <p>{song}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="ui list">
      {author !== undefined && (
        <div className="ui title">
          Titles Songs for Album <i>{name}</i> Band <i>{author}</i>
        </div>
      )}
      {renderedSongs}
    </div>
  );
};

export default SongsList;
