import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery';
import { Searchbar } from 'components/Searchbar';
import { getMoviesByKey } from '../api/getMoviesByKey';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let name = searchParams.get('name') ?? '';
    if (name === '') {
      return;
    }
    getMoviesByKey({ query: name }).then(data => {
      setData(data.results);
    });
  }, [searchParams]);

  const onFormSubmit = value => {
    if (value.query === '') {
      console.log('safasf');
    }
    const params = value.query !== '' ? { name: value.query } : {};
    setSearchParams(params);
  };

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      <MoviesGallery movies={data} />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
