export const CastsList = ({ casts }) => {
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img src={cast.profile_path} alt={cast.name} />
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
