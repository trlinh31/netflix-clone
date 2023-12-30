import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      var request = await axios.get(props.fetchURL).then((response) => {
        setMovies(response.data.results);
      });
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="container px-4 md:px-20 mt-3 mb-10">
      <h3 className="text-white font-bold text-3xl md:text-4xl pb-4">{props.title}</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}>
        <div className="w-full">
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cursor-pointer overflow-hidden select-none">
                <Link to={`/detail/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    className={`w-full object-cover hover:scale-110 hover:shadow-lg transition duration-150`}
                    alt={item.title}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
export default Row;
