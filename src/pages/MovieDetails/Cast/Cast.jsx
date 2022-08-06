import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../api/getMovieCast';
import { CastsList } from '../../../components/CastsList/CastsList';

export const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCast(moviesId).then(data => {
      setCasts(data.cast);
    });
  }, [moviesId]);

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
