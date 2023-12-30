import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home />}
        />
        <Route
          path="/detail/:id"
          element={<Detail />}
        />
        <Route
          path="/search"
          element={<SearchResult />}
        />
      </Routes>
    </div>
  );
}

export default App;
