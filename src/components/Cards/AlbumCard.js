// Libraries
import React from "react";
import uuid from "react-uuid";

class AlbumCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onAlbumCardClick(this.props.album);
  }

  render() {
    console.count("AlbumCard");
    return (
      <div className="ui item button column" onClick={this.onClick}>
        <div className="ui text content">
          <p>Band: {this.props.album.author}</p>
          Album name: {this.props.album.name} - {this.props.album.date}
        </div>
      </div>
    );
  }
}

export default AlbumCard;
