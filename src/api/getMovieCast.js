import Notiflix from 'notiflix';
import { api } from './api';

export const getMovieCast = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/credits`);
    return data;
  } catch (e) {
    Notiflix.Notify.failure('Sorry please try again');
  }
};
