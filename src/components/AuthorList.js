// Libraries
import React from "react";
import uuid from "react-uuid";

// Components
import SongsList from "./SongsList";
import ListRecords from "./ListRecords";
import SearchBar from "./SearchBar";

// Data Sources
import listOfAlbunsSongs from "../data/data";

class AuthorList extends React.Component {
  state = {
    albumPicked: {},
    albumList: listOfAlbunsSongs,
    filteredAlbum: listOfAlbunsSongs,
  };

  componentDidMount() {
    this.setState({ albumList: listOfAlbunsSongs });
  }

  onSearchChange = (searchKey) => {
    const regex = new RegExp(searchKey.toLowerCase());
    let filteredAlbum = this.state.albumList.filter((album) =>
      regex.test(album.author.toLowerCase())
    );
    // console.log("AlbumComponent.onSearchChange-", filteredAlbum);
    this.setState({ filteredAlbum: filteredAlbum });
  };

  onAlbumCardClick = (albumPicked) => {
    if (
      Object.keys(this.state.albumPicked).length === 0 ||
      (albumPicked.name !== this.state.albumPicked.name &&
        albumPicked.author !== this.state.albumPicked.author)
    ) {
      this.setState({ albumPicked: albumPicked });
    }
  };

  cleanSongList = () => {
    if (Object.keys(this.state.albumPicked).length > 0) {
      this.setState({ albumPicked: {} });
    }
  };

  render() {
    console.count("AuthorList");
    //console.log(this.state.albumList);

    return (
      <div>
        <div className="ui segment">
          <SearchBar
            onChange={this.onSearchChange}
            cleanSongList={this.cleanSongList}
          />
        </div>
        <div className="ui grid centered segment">
          <div className="five wide column ">
            <ListRecords
              albumList={this.state.filteredAlbum}
              onAlbumCardClick={this.onAlbumCardClick}
            />
          </div>
          <SongsList albumPicked={this.state.albumPicked} />
          <div className="five wide column "></div>
        </div>
      </div>
    );
  }
}

export default AuthorList;
