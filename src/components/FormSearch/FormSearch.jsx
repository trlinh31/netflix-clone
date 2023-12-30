import axios from 'axios';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function FormSearch({ keywords, setKeywords }) {
  return (
    <form>
      <div className="container relative max-w-[60vw] my-20">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoMdSearch className="text-xl text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full p-4 ps-10 text-sm border-0 text-white border-gray-300 rounded-lg bg-gray-700 outline-none"
          placeholder="Enter name movies ..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          autoComplete="off"
        />
      </div>
    </form>
  );
}
export default FormSearch;
