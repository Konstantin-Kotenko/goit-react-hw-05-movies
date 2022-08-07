import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header.styled';
import { Link } from '../Link/Link.styled';
import styled from 'styled-components';

const Container = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-gap: 16px;
`;

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
