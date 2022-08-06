// import { Genres } from './Genres/Genres';

export const MovieData = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.vote_average}</p>
      <p>{movie.overview}</p>

      {/* <Genres genres={movie.genres} /> */}
    </>
  );
};
