import YouTube from 'react-youtube';

function MovieScreen({ movieKey }) {
  const opts = {
    height: '500',
    width: '100%',
  };
  return (
    <YouTube
      videoId={movieKey}
      opts={opts}
    />
  );
}

export default MovieScreen;
