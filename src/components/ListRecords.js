import React from "react";
import uuid from "react-uuid";
import lodash from "lodash";

import AlbumCard from "./Cards/AlbumCard";

class ListRecords extends React.PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    let result = true;

    if (!_.isEmpty(this.props.albumList)) {
      const idXorState = this.props.albumList.reduce((result, album) => {
        return (result = result ^ album.id);
      }, 0);
      const idSumNextState = nextProps.albumList.reduce((result, album) => {
        return (result = result ^ album.id);
      }, 0);
      result = idXorState !== idSumNextState;
    }

    return result;
  }
  */

  render() {
    console.count("List");
    //console.log("List render()-", this.props.albumList);
    let renderedAlbumList = null;
    const albumList = this.props.albumList;

    if (Object.keys(this.props.albumList).length > 0) {
      renderedAlbumList = albumList.map((album) => {
        return (
          <div className="ui list container segment" key={uuid()}>
            <AlbumCard
              album={album}
              onAlbumCardClick={this.props.onAlbumCardClick}
            />
          </div>
        );
      });
    }

    return (
      <div>
        <div className="five wide column ">
          <div>{renderedAlbumList}</div>
        </div>
      </div>
    );
  }
}

export default ListRecords;
