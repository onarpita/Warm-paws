import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#FCE4EC] via-[#FFF3E0] to-[#F3E5F5] text-center px-4 py-10">
        {/* 404 text */}
        <h1 className="text-[80px] sm:text-[100px] md:text-[130px] lg:text-[150px] font-extrabold text-[#8D6E63] drop-shadow-lg mb-2">
          404
        </h1>
        {/* message */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5D4037] mb-4 leading-tight">
          Oops! Page Not Found
        </h2>
        {/* button */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-[#8D6E63] hover:bg-[#6D4C41] text-white px-5 sm:px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 text-sm sm:text-base"
        >
          <FaHome className="text-lg sm:text-xl" />
          Back to Home
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;