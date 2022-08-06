export const Item = ({ id, title, src }) => {
  return (
    <li key={id} id={id}>
      <img src={`https://image.tmdb.org/t/p/w500` + src} alt={title} />
      <p>{title}</p>
    </li>
  );
};
