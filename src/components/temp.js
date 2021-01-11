// Libraries
import React from "react";
import uuid from "react-uuid";

// Components
import AlbumCard from "./Cards/AlbumCard";
import SearchBar from "./SearchBar";
import SongsList from "./SongsList";

// Data
import listOfAlbunSongs from "../data/data";

class AlbumList extends React.Component {
  state = {
    list: listOfAlbunSongs,
    albumPicked: [],
  };

  onSearchSubmit = (searchKey) => {
    this.setState({ searchKey: searchKey });
    const regex = new RegExp(searchKey.toLowerCase());
    let list = listOfAlbunSongs.filter((album) =>
      regex.test(album.author.toLowerCase())
    );

    this.setState({ list: list });
  };

  cleanSongList = () => {
    this.setState({ albumPicked: [] });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          cleanSongList={this.cleanSongList}
        />
      </div>
    );
  }
}

export default AlbumList;
