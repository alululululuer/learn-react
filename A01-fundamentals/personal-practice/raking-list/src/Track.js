import Artist from "./Artist";

const Track = ({ number, name, artists }) => {
  return (
    <article className="track">
      <span className="track__number">{number}</span>
      <h3 className="track__name">{name}</h3>
      <div className="track__artists">
        {artists.map((artist) => (
          <Artist key={artist.id} name={artist.name} id={artist.id} />
        ))}
      </div>
    </article>
  );
};
export default Track;
