import { useEffect, useState } from 'react';
import requests from '../Request';
import FormSearch from '../components/FormSearch/FormSearch';
import Main from './Main';
import axios from 'axios';
import Rows from '../components/Rows/Rows';
import SearchResult from './SearchResult';
const BASE_URL = 'https://api.themoviedb.org/3';
function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [keywords, setKeywords] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearchMovies = async () => {
    setLoading(false);
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keywords}&include_adult=false&language=en-US`
      );
      if (response.data.results.length === 0) {
        console.log('Not Found');
      } else {
        setMovies(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      handleSearchMovies();
    }, 1000);
  }, [keywords]);

  return (
    <div>
      <Main />
      <FormSearch
        keywords={keywords}
        setKeywords={setKeywords}
      />
      {keywords.length === 0 ? (
        <Rows />
      ) : (
        <SearchResult
          movies={movies}
          loading={loading}
        />
      )}
    </div>
  );
}
export default Home;
