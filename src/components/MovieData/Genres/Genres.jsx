export const Genres = ({ genres }) => {
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id} id={id}>
          {name}
        </li>
      ))}
    </ul>
  );
};
