import PropTypes from "prop-types";
import React from "react";

const ImageList = ({ images }) => {
  const renderedImages = images.map(({ description, id, urls }) => (
    <div key={id}>
      <img src={urls.regular} alt={description} />
    </div>
  ));

  return <div>{renderedImages}</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
