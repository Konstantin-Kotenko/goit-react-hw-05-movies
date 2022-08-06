import { useEffect } from 'react';
import { useState } from 'react';
import { getPopularMovies } from '../api/getPopularMovies';
import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPopularMovies().then(data => {
      setData(data.results);
    });
  }, []);

  return <MoviesGallery movies={data} />;
};
