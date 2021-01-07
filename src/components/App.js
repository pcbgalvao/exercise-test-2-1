import React from "react";
import SearchBar from "./SearchBar";
import AlbumList from "./AlbumList";
import SongsList from "./SongsList";

import listOfAlbunSongs from "../data/data";

class App extends React.Component {
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

  onAlbumCardClick = (albumPicked) => {
    this.setState({ albumPicked });
  };

  cleanSongList = () => {
    this.setState({ albumPicked: [] });
  };

  render() {
    return (
      <div>
        <div className="ui grid centered segment">
          <SearchBar
            onSubmit={this.onSearchSubmit}
            cleanSongList={this.cleanSongList}
          />
        </div>
        <div className="ui grid centered segment">
          <div className="orange seven wide column">
            <AlbumList
              list={this.state.list}
              onAlbumCardClick={this.onAlbumCardClick}
            />
            Found: {this.state.list.length}
          </div>
          <div className="eight wide column ">
            <SongsList albumPicked={this.state.albumPicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
