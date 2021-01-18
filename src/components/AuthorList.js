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
  constructor(props) {
    super(props);
    this.state = {
      albumPicked: {},
      albumList: listOfAlbunsSongs,
      filteredAlbum: listOfAlbunsSongs,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onAlbumCardClick = this.onAlbumCardClick.bind(this);
    this.cleanSongList = this.cleanSongList.bind(this);
  }

  componentDidMount() {
    this.setState({ albumList: listOfAlbunsSongs });
  }

  onSearchChange(searchKey) {
    const regex = new RegExp(searchKey.toLowerCase());
    let filteredAlbum = this.state.albumList.filter((album) =>
      regex.test(album.author.toLowerCase())
    );
    // console.log("AlbumComponent.onSearchChange-", filteredAlbum);
    this.setState({ filteredAlbum: filteredAlbum });
  }

  onAlbumCardClick(albumPicked) {
    if (
      Object.keys(this.state.albumPicked).length === 0 ||
      albumPicked.id !== this.state.albumPicked.id
    ) {
      this.setState({ albumPicked: albumPicked });
    }
  }

  cleanSongList() {
    if (Object.keys(this.state.albumPicked).length > 0) {
      this.setState({ albumPicked: {} });
    }
  }

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
          <div className="eight wide column ">
            <ListRecords
              albumList={this.state.filteredAlbum}
              onAlbumCardClick={this.onAlbumCardClick}
            />
          </div>
          <div className="eight wide column ">
            <SongsList albumPicked={this.state.albumPicked} />
          </div>
        </div>
        version 2.1
      </div>
    );
  }
}

export default AuthorList;
