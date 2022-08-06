import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Header } from './components/Header/Header.styled';
import { Link } from './components/Link/Link.styled';
import { NotFound } from './pages/NotFound';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
