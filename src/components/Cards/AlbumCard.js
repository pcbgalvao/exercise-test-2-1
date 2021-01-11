// Libraries
import React from "react";
import uuid from "react-uuid";

class AlbumCard extends React.PureComponent {
  onClick = (event) => {
    event.preventDefault();
    this.props.onAlbumCardClick(this.props.album);
  };

  render() {
    console.count("AlbumCard");
    return (
      <div className="ui item button column" onClick={this.onClick}>
        <div className="ui text Title">Band</div>
        <div className="ui text content">{this.props.album.author}</div>
        <div className="ui text Title">Album name</div>
        <div className="ui text content">{this.props.album.name}</div>
        <div>year: {this.props.album.date}</div>
      </div>
    );
  }
}

export default AlbumCard;
