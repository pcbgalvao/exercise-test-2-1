// Libraries
import React from "react";
import uuid from "react-uuid";

// Components
import AlbumCard from "./Cards/AlbumCard";

const AlbumList = ({ list, onAlbumCardClick }) => {
  const renderedList = list.map((album) => (
    <div className="ui list container segment" key={uuid()}>
      <AlbumCard album={album} onAlbumCardClick={onAlbumCardClick} />
    </div>
  ));

  return <div>{renderedList}</div>;
};

export default AlbumList;
