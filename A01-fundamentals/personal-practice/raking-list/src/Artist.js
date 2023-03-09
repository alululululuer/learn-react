const Artist = ({ name, id }) => {
  return (
    <a href={`/artists/${id}`} className="artist">
      {name}
    </a>
  );
};
export default Artist;
