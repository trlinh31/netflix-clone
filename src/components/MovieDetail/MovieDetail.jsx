function MovieDetail({ id }) {
  return (
    <iframe
      title="Embedded Video"
      className="w-full h-[70vh]"
      src={`https://www.2embed.cc/embed/${id}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}

export default MovieDetail;
