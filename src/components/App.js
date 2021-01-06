import React from "react";
import SearchBar from "./SearchBar";
import AlbumList from "./AlbumList";
import SongsList from "./SongsList";

import listOfAlbunSongs from "../data/data";

class App extends React.Component {
  state = {
    list: listOfAlbunSongs,
    songs: [],
  };

  onSearchSubmit = (searchKey) => {
    this.setState({ searchKey: searchKey });
    const regex = new RegExp(searchKey.toLowerCase());
    let list = listOfAlbunSongs.filter((album) =>
      regex.test(album.author.toLowerCase())
    );

    this.setState({ list: list });
  };

  onAlbumCardClick = (songs) => {
    this.setState({ songs: songs });
  };

  render() {
    return (
      <div>
        <div className="ui grid centered segment">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="ui grid centered segment">
          <div className="orange five wide column">
            <AlbumList
              list={this.state.list}
              onAlbumCardClick={this.onAlbumCardClick}
            />
            Found: {this.state.list.length}
          </div>
          <div className="five wide column ">
            <SongsList songs={this.state.songs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
