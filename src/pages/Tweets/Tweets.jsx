import React, { useState, useEffect } from 'react';
import { fetchTweets } from 'services/api';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import CardsGallery from 'components/CardsGallery/CardsGallery';
import Loader from 'components/Loader/Loader';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { useLocation } from 'react-router-dom';
import { ButtonGoBack } from './Tweets.styled';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [queryPage, setQueryPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const getTweets = async () => {
      try {
        const { data } = await fetchTweets(queryPage);
        if (queryPage === 1) {
          setTweets(data);
          setIsLoading(false);
        } else {
          setTweets(prevTweets => [...prevTweets, ...data]);
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(
          'Sorry for the inconvenience! Please try to use our service in a few minutes!'
        );
      }
    };
    getTweets();
  }, [queryPage]);

  const handleLoadMore = async () => {
    setQueryPage(prevState => prevState + 1);
  };

  const options = ['all', 'follow', 'followings'];

  const handleFilterChange = option => {
    setFilter(option.value);
  };

  return (
    <>
      <ButtonGoBack to={location.state?.from ?? '/'}>
        <FiArrowLeft
          style={{
            width: '20px',
            height: '20px',
          }}
        />
        Go back
      </ButtonGoBack>
      <Dropdown
        options={options}
        onChange={handleFilterChange}
        value={filter}
      />
      <CardsGallery tweets={tweets} filter={filter} />
      {isLoading && <Loader />}
      {!isLoading && tweets.length > 0 && tweets.length !== 12 && (
        <BtnLoadMore onClick={handleLoadMore} />
      )}
    </>
  );
};

export default Tweets;
