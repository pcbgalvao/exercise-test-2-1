// Libraries
import React from "react";

import PropTypes from "prop-types";
import uuid from "react-uuid";

class AlbumCard extends React.Component {
  state = {
    album: this.props.Album,
  };

  onClick = (event) => {
    event.preventDefault();
    this.props.onAlbumCardClick(this.state.album.songs);
  };

  render() {
    return (
      <div className="ui button column" onClick={this.onClick}>
        <h3>
          band: <b>{this.state.album.author}</b>
        </h3>
        <h5>
          album name: <b>{this.state.album.name}</b>
        </h5>
        <p>year: {this.state.album.date}</p>
      </div>
    );
  }
}

AlbumCard.protoType = {
  Album: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AlbumCard;
