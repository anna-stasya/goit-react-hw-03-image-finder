import React from 'react';
import s from '../ImageGallery/ImageGallery.module.css';

// const smoothScroll = () => {
//     return window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
// };

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onOpenModal,
  // scroll,
}) => {
  return (
    <li
      onClick={() => {
        onOpenModal(largeImageURL, tags);
      }}
    >
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
      {/* {scroll && smoothScroll()} */}
    </li>
  );
};

export default ImageGalleryItem;
