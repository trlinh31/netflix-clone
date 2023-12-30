import requests from '../../Request';
import Row from '../Row/Row';

function Rows() {
  return (
    <div>
      <Row
        title="Upcoming"
        fetchURL={requests.requestUpcoming}
      />
      <Row
        title="Trending"
        fetchURL={requests.requestTrendingMovie}
      />
      <Row
        title="Action Movie"
        fetchURL={requests.requestActionMovie}
      />
      <Row
        title="Horror Movie"
        fetchURL={requests.requestHorrorMovie}
      />
      <Row
        title="Adventure"
        fetchURL={requests.requestAdventureMovie}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.requestTopRated}
      />
    </div>
  );
}

export default Rows;
