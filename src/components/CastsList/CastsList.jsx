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
      {casts.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500` + profile_path}
            alt={name}
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </List>
  );
};
