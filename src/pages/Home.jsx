import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/getPopularMovies';
import { MoviesGallery } from '../components/MoviesGallery';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPopularMovies().then(data => {
      setData(data.results);
    });
  }, []);

  return (
    <>
      <MoviesGallery movies={data} />
    </>
  );
};

export default Home;
