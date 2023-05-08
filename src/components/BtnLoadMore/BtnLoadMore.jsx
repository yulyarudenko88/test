import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={() => onClick()}>
      Load more
    </LoadMoreBtn>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};
