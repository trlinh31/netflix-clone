import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { UserAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container h-[80px] px-4 xl:px-20 absolute top-0 left-0 right-0 z-40">
      <div className="flex justify-between items-center h-full">
        <Link
          to={'/'}
          className="block h-full">
          <img
            src={Logo}
            className="h-full"
            alt="Netflix"
          />
        </Link>
        {user?.email ? (
          <div>
            <button
              onClick={handleLogout}
              className="bg-primary text-sm md:text-xl px-4 py-2 text-white font-semibold rounded-md">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to={'/login'}
              className="px-4 py-2 text-sm md:text-xl text-white font-semibold">
              Sign In
            </Link>
            <Link
              to={'/signup'}
              className="bg-primary text-sm md:text-xl px-4 py-2 text-white font-semibold rounded-md">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
