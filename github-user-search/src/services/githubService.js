import axios from 'axios';

export const searchUsers = async (query) => {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  const response = await axios.get(url);
  return response.data;
};
