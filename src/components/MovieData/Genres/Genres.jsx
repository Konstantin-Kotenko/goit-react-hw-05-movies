import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  font-weight: 400;
  &:not(: last-child) {
    margin-right: 15px;
  }
`;

export const Genres = ({ genres }) => {
  return (
    <List>
      {genres.map(({ id, name }) => (
        <Item key={id} id={id}>
          {name}
        </Item>
      ))}
    </List>
  );
};
