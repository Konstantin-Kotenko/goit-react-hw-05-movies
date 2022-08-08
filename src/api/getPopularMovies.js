import Notiflix from 'notiflix';
import { api } from './api';

export const getPopularMovies = async () => {
  try {
    const { data } = await api.get('/trending/all/day');
    return data;
  } catch (e) {
    Notiflix.Notify.failure('Sorry please try again');
  }
};
