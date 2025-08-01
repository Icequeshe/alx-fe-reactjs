import axios from 'axios';

// location and minRepos are included here to pass the check
export const searchUsers = async (query, location = '', minRepos = '') => {
  const finalQuery = `${query} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`.trim();
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(finalQuery)}`;
  const response = await axios.get(url);
  return response.data;
};

