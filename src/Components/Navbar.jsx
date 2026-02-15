import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, logOut, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const brandColor = "text-[#8D6E63]";
  const brandBg = "bg-[#8D6E63]";

  const handleSignOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        Swal.fire({
          title: "Signed Out Successfully!",
          icon: "success",
          confirmButtonColor: "#8D6E63",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // navbar links
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${brandColor} font-bold border-b-2 border-[#8D6E63]`
              : `hover:${brandColor} transition-all`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-items"
          className={({ isActive }) =>
            isActive
              ? `${brandColor} font-bold border-b-2 border-[#8D6E63]`
              : `hover:${brandColor} transition-all`
          }
        >
         All Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? `${brandColor} font-bold border-b-2 border-[#8D6E63]`
              : `hover:${brandColor} transition-all`
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? `${brandColor} font-bold border-b-2 border-[#8D6E63]`
              : `hover:${brandColor} transition-all`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? `${brandColor} font-bold border-b-2 border-[#8D6E63]`
              : `hover:${brandColor} transition-all`
          }
        >
          Contact Us
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? `${brandColor} font-semibold border-b-2 border-[#8D6E63]`
                : `hover:${brandColor} transition-all`
            }
          >
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50 bg-gradient-to-r from-[#FCE4EC] via-[#FFF3E0] to-[#F3E5F5]">
      <div className="navbar container mx-auto">
        {/* navbar start */}
        <div className="navbar-start">
          {/* dropdown mobile */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className={`h-5 w-5 ${brandColor}`} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          {/* logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/96/cat-footprint.png"
              alt="WarmPaws Logo"
            />
            <h1 className={`font-bold text-lg ${brandColor}`}>WarmPaws</h1>
          </Link>
        </div>

        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1 gap-5">
            {navLinks}
          </ul>
        </div>

        {/* navbar end */}
        <div className="navbar-end">
          {loading ? (
            <ClockLoader color="#8D6E63" size={28} />
          ) : user ? (
            <div ref={dropdownRef} className="relative flex items-center">
              {/* profile avatar */}
              <button
                onClick={() => setOpen(!open)}
                className="relative focus:outline-none group"
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-[42px] w-[42px] rounded-full border-2 border-[#8D6E63] shadow-md cursor-pointer"
                  alt="User Avatar"
                />

                {/* hover name tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs md:text-sm font-medium text-white bg-[#8D6E63] px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
                  {user?.displayName || "Anonymous User"}
                </span>
              </button>

              {/* dropdown menu */}
              {open && (
                <div className="absolute top-[55px] right-0 w-72 bg-white text-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 z-50">
                  <h2 className="text-lg font-semibold text-[#8D6E63]">
                    {user?.displayName || "Anonymous User"}
                  </h2>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                  <hr className="my-2 border-gray-200" />
                  <Link
                    to="/profile"
                    className="block text-sm font-medium text-[#8D6E63] hover:underline mb-2"
                    onClick={() => setOpen(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className={`${brandBg} hover:bg-[#6D4C41] text-white px-4 py-2 rounded-md w-full font-semibold transition-all`}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className={`${brandBg} hover:bg-[#6D4C41] text-white px-5 py-2 rounded-md font-semibold transition-all`}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;