import { getDataMovie } from 'api/getDataMovie';
import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { MovieData } from '../../components/MovieData/MovieData';
import { MovieDetailAction } from '../../components/MovieDetailsAction/MovieDetailAction';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: rgb(63, 81, 181);
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  &:hover {
    opacity: 1;
  }
`;

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getDataMovie(movieId).then(data => {
      setData(data);
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>
        <Button>Back to movies</Button>
      </Link>
      <MovieData movie={data} />
      <MovieDetailAction />
      <Outlet />
    </>
  );
};

export default MovieDetails;
