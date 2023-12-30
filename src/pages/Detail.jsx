import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import requests from '../Request';
import MovieScreen from '../components/MovieScreen/MovieScreen';

function Detail() {
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieKey, setMovieKey] = useState('');
  const moviesRandom = movies.sort(() => Math.random() - 0.5).slice(0, 5);
  useEffect(() => {
    async function fetchMovieTrending() {
      var request = await axios.get(requests.requestTrendingMovie).then((response) => {
        setMovies(response.data.results);
      });
      return request;
    }
    fetchMovieTrending();
  }, []);
  useEffect(() => {
    async function fetchMovie() {
      var request = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          setMovie(response.data);
          setGenres(response.data.genres);
        })
        .catch((error) => {
          console.log(error);
        });
      return request;
    }
    fetchMovie();
  }, [id]);
  useEffect(() => {
    async function fetchMovieKey() {
      var request = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        .then((response) => {
          setMovieKey(response.data.results[0].key);
        });
      return request;
    }
    fetchMovieKey();
  }, [id]);
  return (
    <div>
      <div className="container px-4 md:px-20 mt-[100px]">
        <div className="w-full grid grid-cols-10 gap-5">
          <div className="w-full col-span-10 lg:col-span-7">
            <MovieScreen movieKey={movieKey} />
            <div className="my-3">
              <h1 className="text-white font-medium text-2xl">{movie?.title}</h1>
            </div>
            <div className="flex flex-wrap items-center my-3">
              {genres.map((item) => (
                <p
                  className="text-white mr-3 bg-primary px-3 py-1"
                  key={item.id}>
                  {item.name}
                </p>
              ))}
            </div>
            <div className="my-3 text-white">
              <h3>Overview:</h3>
              <p className="text-sm text-gray-400 pt-2">{movie?.overview}</p>
            </div>
          </div>
          <div className="w-full col-span-10 lg:col-span-3">
            <h2 className="text-white font-bold text-2xl pb-3">Trending</h2>
            {moviesRandom.map((item) => (
              <Link
                to={`/detail/${item.id}`}
                key={item.id}>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className=" overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      className="w-full hover:scale-110 transition duration-500"
                      alt={item.title}
                    />
                  </div>
                  <div className="flex items-center w-full">
                    <p className="text-white line-clamp-2">{item.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
