const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  requestTrendingMovie: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  requestActionMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  requestHorrorMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  requestAdventureMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
};

export default requests;
