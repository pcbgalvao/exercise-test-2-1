// Libraries
import React from "react";
import uuid from "react-uuid";

class AlbumCard extends React.Component {
  state = {
    album: this.props.album,
  };

  onClick = (event) => {
    event.preventDefault();
    this.props.onAlbumCardClick(this.state.album);
  };

  render() {
    return (
      <div className="ui item button column" onClick={this.onClick}>
        <div className="ui text Title">Band</div>
        <div className="ui text content">{this.state.album.author}</div>
        <div className="ui text Title">Album name</div>
        <div className="ui text content">{this.state.album.name}</div>
        <div>year: {this.state.album.date}</div>
      </div>
    );
  }
}

export default AlbumCard;
