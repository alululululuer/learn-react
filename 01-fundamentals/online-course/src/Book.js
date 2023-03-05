const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img className="book__img" src={img} alt={title} />
      <h2 className="book__title">{title}</h2>
      <h3 className="book__author">{author}</h3>
      <span className="book__number">#{number}</span>
    </article>
  );
};

export default Book;
