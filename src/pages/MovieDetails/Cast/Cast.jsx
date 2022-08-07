import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../api/getMovieCast';
import { CastsList } from '../../../components/CastsList/CastsList';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCasts(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {casts && (
        <>
          <CastsList casts={casts} />
        </>
      )}
    </>
  );
};

export default Cast;
