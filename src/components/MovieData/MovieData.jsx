import { Genres } from './Genres/Genres';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  border-radius: 4px;
  margin-right: 15px;
  width: 250px;
  height: 350px;
`;

const Text = styled.p`
  font-weight: 400;
`;

const Span = styled.span`
  font-weight: 700;
`;

export const MovieData = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres, release_date } =
    movie;
  return (
    <>
      <Container>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div>
          <h2>
            {title}({new Date(release_date).getFullYear()})
          </h2>
          <Text>
            <Span>Rated : </Span>
            {vote_average}
          </Text>
          <Text>
            <Span>Overview</Span>
            <br />
            {overview}
          </Text>
          <Span>Genres</Span>
          {genres && <Genres genres={genres} />}
        </div>
      </Container>
    </>
  );
};
