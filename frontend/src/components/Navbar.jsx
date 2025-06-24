import React, { useState } from 'react';
import { FaCalculator, FaSearch, FaChevronDown, FaChevronUp, FaRegAddressBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { MdEventNote } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="relative h-[15vh] bg-gradient-to-r from-black to-red-600">
        <div className="p-1 sm:p-2 text-center flex justify-center items-center bg-red-600 text-red-100 font-bold text-lg md:text-xl rounded-b-3xl w-[50vw] h-[11vh] mx-auto">
          INSAAF TRADERS
        </div>

        {/* Dropdown toggle */}
        <div className="absolute left-5 bottom-0 z-50 text-white">
          <button onClick={handleToggle} className="flex items-center gap-2 text-lg sm:text-2xl hover:scale-105 transition">
            Menu {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Dropdown menu */}
          <div className={`backdrop-blur-md rounded-2xl z-10 absolute w-40 p-1 transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-1 mt-1 text-sm sm:text-md
            ${isOpen ? 'max-h-[250px]' : 'max-h-0'}`}>

            <>
              {location.pathname !== "/" && (
                <Link to="/" className="flex items-center gap-2 hover:scale-105 transition">
                  <FaHome />
                  <span>Home</span>
                </Link>
              )}

              {location.pathname !== "/search" && (
                <Link to="/search" className="flex items-center gap-2 hover:scale-105 transition">
                  <FaSearch />
                  <span>Search Record</span>
                </Link>
              )}

              {location.pathname !== "/add" && (
                <Link to="/add" className="flex items-center gap-2 hover:scale-105 transition">
                  <FaRegAddressBook />
                  <span>Add Record</span>
                </Link>
              )}

              {location.pathname !== "/calculator" && (
                <Link to="/calculator" className="flex items-center gap-2 hover:scale-105 transition">
                  <FaCalculator />
                  <span>Calculator</span>
                </Link>
              )}

              {location.pathname !== "/plans" && (
                <Link to="/plans" className="flex items-center gap-2 hover:scale-105 transition">
                  <LuNotebookPen />
                  <span>Installment Plans</span>
                </Link>
              )}

              {location.pathname !== "/criteria" && (
                <Link to="/criteria" className="flex items-center gap-2 hover:scale-105 transition">
                  <MdEventNote />
                  <span>Eligible?</span>
                </Link>
              )}
            </>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


