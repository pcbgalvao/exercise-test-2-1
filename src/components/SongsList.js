// Libraries
import React from "react";
import uuid from "react-uuid";

class SongsList extends React.PureComponent {
  render() {
    console.count("SongList");
    //console.log("render-", this.props);
    let renderedSongs = null;
    let renderedTitle = null;
    const { songs, name, author } = this.props.albumPicked;
    //console.log("songs, name, author-", songs, name, author);

    if (songs) {
      renderedTitle = (
        <div className="ui title">
          Titles Songs for Album <i>{name}</i> Band <i>{author}</i>
        </div>
      );
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
      <div>
        <div>{renderedTitle}</div>
        <div className="ui list">{renderedSongs}</div>
      </div>
    );
  }
}

export default SongsList;
