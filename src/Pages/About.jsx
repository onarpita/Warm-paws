import React from "react";
import { FaHeart, FaShieldAlt, FaPaw } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFF3E0] via-[#FCE4EC] to-[#E3F2FD] px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 rounded-full bg-[#8D6E63]/20 blur-3xl opacity-40"></div>

          <img
            src="https://i.ibb.co.com/QvWsJscZ/about.jpg"
            alt="Winter Pet"
            className="w-80 sm:w-96 lg:w-full rounded-3xl shadow-2xl border-4 border-white relative z-10 transform hover:scale-105 duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-[#8D6E63]/20">
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#5D4037] mb-6">
            About Us
          </h1>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            At <span className="font-semibold text-[#8D6E63]">WarmPaws</span>, we create high-quality winter outfits and cozy accessories for your beloved pets.
            Our goal is to ensure every furry friend stays <strong>warm, safe, and stylish</strong> during cold seasons.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            We combine love, creativity, and comfort to design winter essentials that make both pets and owners happy.  
            Your pet's comfort is our highest priority.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-4">
            <div className="p-5 bg-[#FFF8E1] rounded-xl shadow-md hover:shadow-xl duration-300">
              <FaPaw className="text-4xl mx-auto text-[#8D6E63]" />
              <h3 className="mt-2 font-semibold text-[#5D4037] text-lg">
                Pet-Friendly
              </h3>
            </div>

            <div className="p-5 bg-[#FCE4EC] rounded-xl shadow-md hover:shadow-xl duration-300">
              <FaHeart className="text-4xl mx-auto text-[#E91E63]" />
              <h3 className="mt-2 font-semibold text-[#5D4037] text-lg">
                Made with Love
              </h3>
            </div>

            <div className="p-5 bg-[#E3F2FD] rounded-xl shadow-md hover:shadow-xl duration-300">
              <FaShieldAlt className="text-4xl mx-auto text-[#2196F3]" />
              <h3 className="mt-2 font-semibold text-[#5D4037] text-lg">
                Safe & Durable
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;