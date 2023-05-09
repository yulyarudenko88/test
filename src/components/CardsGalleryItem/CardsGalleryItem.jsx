import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Btn,
  Card,
  FollowersQuantity,
  TweetsQuantity,
} from './CardsGalleryItem.styled';
import LogoImg from 'images/logo.png';
import { changeFollowers } from 'services/api';

const CardsListItem = ({ id, avatar, alt, followers, tweets, filter }) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {(filter === 'all' ||
        (filter === 'follow' && !isFollow) ||
        (filter === 'followings' && isFollow)) && (
        <Card>
          <img src={LogoImg} alt="logo" />
          <Avatar src={avatar} alt={alt} width={56} height={56} />
          <TweetsQuantity>{tweets} tweets</TweetsQuantity>
          <FollowersQuantity>
            {followersQuantity.toLocaleString('en-US')} Followers
          </FollowersQuantity>
          <Btn
            onClick={onFollow}
            className={!isFollow ? 'follow' : 'following'}
          >
            {!isFollow ? 'Follow' : 'Following'}
          </Btn>
        </Card>
      )}
    </>
  );
};

CardsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  filter: PropTypes.string,
};

export default CardsListItem;
