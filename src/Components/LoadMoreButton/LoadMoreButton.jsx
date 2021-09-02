import React from 'react';
import s from './LoadMoreButton.module.css';

function LoadMoreButton({ LoadMoreBtn }) {
  return (
    <button type="button" className={s.Button} onClick={LoadMoreBtn}>
      Load more
    </button>
  );
}

export { LoadMoreButton };
