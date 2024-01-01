import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResult from './pages/SearchResult';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AuthContextProvider>
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
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </AuthContextProvider>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
