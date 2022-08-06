import { Link } from 'react-router-dom';

export const Item = ({ id, title, src }) => {
  return (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500` + src} alt={title} />
      </Link>
      <p>{title}</p>
    </li>
  );
};
