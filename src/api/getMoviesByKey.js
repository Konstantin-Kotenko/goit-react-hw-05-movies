import { api } from './api';

export const params = {
  page: 1,
};

export const getMoviesByKey = async query => {
  try {
    const { data } = await api.get('/search/movie', { params: query });
    return data;
  } catch (e) {
    console.log(e);
  }
};
