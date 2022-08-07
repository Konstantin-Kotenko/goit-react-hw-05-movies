import styled from 'styled-components';

const Item = styled.li`
  border-bottom: 1px solid black;
  margin: 0px;
  &:not(last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewsList = ({ reviews }) => {
  return (
    <ol>
      {reviews.map(({ id, content }) => (
        <Item key={id}>
          <p>{content}</p>
        </Item>
      ))}
    </ol>
  );
};
