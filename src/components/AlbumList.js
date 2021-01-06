// Libraries
import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

// Components
import AlbumCard from "./Cards/AlbumCard";

const AlbumList = ({ list, onAlbumCardClick }) => {
  const renderedList = list.map((item, index) => (
    <div className="ui list container segment" key={uuid()}>
      <AlbumCard
        Album={item}
        index={index}
        onAlbumCardClick={onAlbumCardClick}
      />
    </div>
  ));

  return <div>{renderedList}</div>;
};

AlbumList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAlbumCardClick: PropTypes.func.isRequired,
};

export default AlbumList;
