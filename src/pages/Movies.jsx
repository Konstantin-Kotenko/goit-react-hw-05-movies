import { useState, useEffect } from 'react';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getMoviesByKey } from '../api/getMoviesByKey';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const onFormSubmit = value => {
    setQuery(value);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    getMoviesByKey({ query: query }).then(data => {
      setData(data.results);
    });
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      <MoviesGallery movies={data} />
    </>
  );
};
