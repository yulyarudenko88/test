import { CardsList } from './CardsGallery.styled';
import CardsGalleryItem from 'components/CardsGalleryItem/CardsGalleryItem';
import React from 'react';

// import PropTypes from 'prop-types';

const CardsGallery = ({ tweets }) => {
  return (
    <CardsList>
      {tweets &&
        tweets.map(({ id, avatar, followers, tweets,user }) => {
          return (
            <CardsGalleryItem
              key={id}
              id={id}
              avatar={avatar}
              alt={user}
              followers={followers}
              tweets={tweets}
            />
          );
        })}
    </CardsList>
  );
};

// MoviesGallery.propTypes = {
//   movies: PropTypes.array,
//   pathTo: PropTypes.string.isRequired,
// };

export default CardsGallery;
