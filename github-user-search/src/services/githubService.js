import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async (query, location = '', minRepos = '') => {
  const finalQuery = `${query} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`.trim();
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(finalQuery)}`;
  const response = await axios.get(url);
  return response.data;
};
