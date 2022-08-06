import { api } from './api';

export const getPopularMovies = async () => {
  try {
    const { data } = await api.get('/trending/all/day');
    return data;
  } catch (e) {
    console.log(e);
  }
};
