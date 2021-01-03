import PropTypes from "prop-types";
import React from "react";

import AlbumCard from "../components/Cards/AlbumCard";

const ShowList = (props) => {
  const { list } = props;
  const renderedList = list.map((item, index) => (
    <div className="ui list title segment">
      <AlbumCard Album={item} />
    </div>
  ));

  return <div>{renderedList}</div>;
};

ShowList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShowList;
