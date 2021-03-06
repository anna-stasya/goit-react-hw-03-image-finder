import React from 'react';
import PropTypes from 'prop-types';

import s from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onOpenModal,
}) => {
  return (
    <li
      onClick={() => {
        onOpenModal(largeImageURL, tags);
      }}
    >
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
