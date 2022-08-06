import { getDataMovie } from 'api/getDataMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieData } from '../../components/MovieData/MovieData';

export const MovieDetails = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getDataMovie(movieId).then(result => {
      setData(result);
    });
  }, [movieId]);

  return <MovieData movie={data} />;
};
