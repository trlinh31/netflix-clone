import React from 'react';
import Loading from 'react-loading';
import { Link } from 'react-router-dom';

function SearchResult({ movies, loading }) {
  return (
    <div className="container relative px-4 md:px-20 my-3 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
      {loading && (
        <Loading
          className="absolute top-52 left-1/2 translate-x-[-50%] z-50"
          type="spin"
          color="#fff"
          height={100}
          width={100}
        />
      )}
      {movies?.map((item) => (
        <div
          className="w-full cursor-pointer inline-block overflow-hidden select-none"
          key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className={`w-full object-cover hover:scale-110 hover:shadow-lg transition duration-150`}
              alt={item.title}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
