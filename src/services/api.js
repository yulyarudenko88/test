import axios from 'axios';

axios.defaults.baseURL = `https://645640f95f9a4f23613ed358.mockapi.io/tweets`;

export async function fetchTweets(page) {
  const searchParams = new URLSearchParams({
    limit: 3,
    page,
  })

  const response = await axios.get(`/followers/?${searchParams}`);
  return await response;
}

export async function changeFollowers(id, newAmount) {
  const response = await axios.put(`/followers/${id}`, {followers:newAmount});
  return await response;
}