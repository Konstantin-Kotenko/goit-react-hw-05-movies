import { api } from './api';

export const getMovieReviews = async id => {
  try {
    const { data } = await api.get(`/movie/${id}/reviews`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
