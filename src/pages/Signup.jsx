import React, { useState } from 'react';
import Banner from '../assets/images/banner.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const resetInput = () => {
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      resetInput();
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        src={Banner}
        className="w-full h-full absolute object-cover z-20"
        alt="Netflix"
      />
      <div className="overlay bg-black/60 w-full h-screen absolute top-0 left-0 z-20"></div>
      <div className="max-w-[450px] h-[500px] bg-black/75 text-white p-16 z-30">
        <h1 className="font-bold text-4xl mb-10">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full outline-none p-3 my-2 bg-gray-700 rounded"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full outline-none p-3 my-2 bg-gray-700 rounded"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary text-white w-full py-3 my-6 rounded">Sign Up</button>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-1"
                id="rememberInput"
              />
              <label
                htmlFor="rememberInput"
                className="text-gray-400 text-sm">
                Remember me
              </label>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 text-sm">
                Need help?
              </a>
            </div>
          </div>
          <div className="my-6">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link
                to={'/login'}
                className="text-white">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
