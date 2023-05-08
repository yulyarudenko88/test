import React, { useState, useEffect } from 'react';
import { fetchTweets } from 'services/api';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import CardsGallery from 'components/CardsGallery/CardsGallery';
import Loader from 'components/Loader/Loader';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { useLocation } from 'react-router-dom';
import { ButtonGoBack } from './Tweets.styled';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [queryPage, setQueryPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
      <ButtonGoBack to={location.state?.from ?? "/"}>
        <FiArrowLeft
          style={{
            width: '20px',
            height: '20px',
          }}
        />
        Go back
      </ButtonGoBack>
      <CardsGallery tweets={tweets} />
      {isLoading && <Loader />}
      {!isLoading && tweets.length > 0 && tweets.length !== 12 && (
        <BtnLoadMore onClick={handleLoadMore} />
      )}
    </>
  );
};

export default Tweets;
