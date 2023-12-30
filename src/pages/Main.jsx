import axios from 'axios';
import { useEffect, useState } from 'react';
import requests from '../Request';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    async function fetchData() {
      var request = await axios.get(requests.requestPopular).then((responese) => {
        setMovies(responese.data.results);
      });
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
        <div className="absolute w-full md:w-1/2 px-4 md:px-20 top-1/2 left-0 transform -translate-y-1/2">
          <h1 className="font-bold text-white text-3xl md:text-5xl pb-5">{movie?.title}</h1>
          <p className="text-gray-400 line-clamp-2 md:line-clamp-none mb-5">{movie?.overview}</p>
          <Link
            to={`/detail/${movie?.id}`}
            className="bg-primary px-4 py-2 text-white font-semibold rounded-md flex items-center w-max">
            <FaPlay className="mr-2" />
            Watch Now
          </Link>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          className="w-full h-full object-cover"
          alt={movie?.title}
        />
      </div>
    </div>
  );
}

export default Main;
