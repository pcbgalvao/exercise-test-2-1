import React from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import ShowList from "./ShowList";
import ShowSideBar from "./ShowSideBar";

import listOfAlbunSongs from "../data/data";

class App extends React.Component {
  state = {
    listType: "Album",
    searchKey: "",
    list: listOfAlbunSongs,
  };

  onSearchSubmit = (searchKey) => {
    this.setState({ searchKey: searchKey });
    const regex = new RegExp(searchKey.toLowerCase());
    let list = listOfAlbunSongs.filter((album) =>
      regex.test(album.name.toLowerCase())
    );

    //    console.log ("list-", list);
    this.setState({ list: list });
  };

  render() {
    return (
      <div>
        <Menu />
        <div className="ui segment" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ShowList list={this.state.list} />
          <ShowSideBar />
          Found: {this.state.list.length} {this.state.listType}
        </div>
      </div>
    );
  }
}

export default App;
