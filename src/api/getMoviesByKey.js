import Notiflix from 'notiflix';
import { api } from './api';

export const getMoviesByKey = async query => {
  try {
    const { data } = await api.get('/search/movie', { params: query });
    return data;
  } catch (e) {
    Notiflix.Notify.failure('Sorry please try again');
  }
};
