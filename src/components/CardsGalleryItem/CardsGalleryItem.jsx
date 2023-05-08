import { useState } from 'react';
import {
  Avatar,
  Btn,
  Card,
  FollowersQuantity,
  TweetsQuantity,
} from './CardsGalleryItem.styled';
// import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { MovieListItem, MovieLink } from './MoviesGalleryItem.styled';
import LogoImg from 'images/logo.png';
import { changeFollowers } from 'services/api';

const CardsListItem = ({ id, avatar, alt, followers, tweets }) => {
  const [isFollow, setIsFollow] = useState(
    localStorage.getItem(`isFollow-${id}`) === 'true' || false
  );
  const [followersQuantity, setFollowersQuantity] = useState(followers);

  const onFollow = async () => {
    setIsFollow(!isFollow);

    const newFollowersQuantity = isFollow
      ? followersQuantity - 1
      : followersQuantity + 1;
    setFollowersQuantity(newFollowersQuantity);
    localStorage.setItem(`isFollow-${id}`, !isFollow);
    try {
      await changeFollowers(id, newFollowersQuantity);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <img src={LogoImg} alt="logo" />
      <Avatar src={avatar} alt={alt} width={56} height={56} />
      <TweetsQuantity>{tweets} tweets</TweetsQuantity>
      <FollowersQuantity>
        {followersQuantity.toLocaleString('en-US')} Followers
      </FollowersQuantity>
      <Btn onClick={onFollow} className={!isFollow ? 'follow' : 'following'}>
        {!isFollow ? 'Follow' : 'Following'}
      </Btn>
    </Card>
  );
};

// MoviesGalleryItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   posterPath: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   pathTo: PropTypes.string.isRequired,
// };

export default CardsListItem;
