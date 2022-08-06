import { Item } from './Item/Item';

export const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path, name }) => (
        <Item key={id} id={id} title={title ? title : name} src={poster_path} />
      ))}
    </ul>
  );
};
