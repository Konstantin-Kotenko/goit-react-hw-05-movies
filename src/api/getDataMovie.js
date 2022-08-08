import Notiflix from 'notiflix';
import { api } from './api';

export const getDataMovie = async id => {
  try {
    const { data } = await api.get(`movie/${id}`);
    return data;
  } catch (e) {
    Notiflix.Notify.failure('Sorry please try again');
  }
};
