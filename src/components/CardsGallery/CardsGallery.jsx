import { CardsList } from './CardsGallery.styled';
import CardsGalleryItem from 'components/CardsGalleryItem/CardsGalleryItem';
import PropTypes from 'prop-types';

const CardsGallery = ({ tweets, filter }) => {
  return (
    <CardsList>
      {tweets &&
        tweets.map(({ id, avatar, followers, tweets, user }) => {
          return (
            <CardsGalleryItem
              key={id}
              id={id}
              avatar={avatar}
              alt={user}
              followers={followers}
              tweets={tweets}
              filter={filter}
            />
          );
        })}
    </CardsList>
  );
};

CardsGallery.propTypes = {
  tweets: PropTypes.array.isRequired,
  filter: PropTypes.string,
};

export default CardsGallery;
