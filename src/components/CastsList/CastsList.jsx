import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 4px;
`;

export const CastsList = ({ casts }) => {
  return (
    <List>
      {casts.map(cast => (
        <li key={cast.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500` + cast.profile_path}
            alt={cast.name}
          />
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </List>
  );
};
