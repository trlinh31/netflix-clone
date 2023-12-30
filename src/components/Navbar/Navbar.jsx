import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
function Navbar() {
  return (
    <div className="container h-[80px] px-4 xl:px-20 absolute top-0 left-0 right-0 z-50">
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
        <div>
          <a
            href="#"
            className="px-4 py-2 text-white font-semibold">
            Sign In
          </a>
          <a
            href="#"
            className="bg-primary px-4 py-2 text-white font-semibold rounded-md">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
