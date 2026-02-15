
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#FCE4EC] via-[#FFF3E0] to-[#F3E5F5] px-5 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/hxCnjcFX/contact.jpg"
            alt="Pet Contact Illustration"
            className="w-64 sm:w-80 md:w-[350px] lg:w-full rounded-3xl shadow-2xl border border-white/40"
          />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200"
        >
          <h1 className="text-4xl font-bold text-center text-[#5D4037] mb-3">
            Contact Us
          </h1>

          <p className="text-gray-600 text-center mb-6">
            Have questions? Need support? We're here to help anytime!
          </p>

          <form className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full rounded-xl shadow-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full rounded-xl shadow-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-xl shadow-sm"
            />

            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32 rounded-xl shadow-sm"
            ></textarea>

            <button className="btn bg-[#8D6E63] hover:bg-[#6D4C41] text-white w-full text-lg py-3 shadow-lg rounded-xl border-none">
              Send Message
            </button>
          </form>

          <div className="pt-5 text-center text-gray-600 text-sm">
            We usually reply within{" "}
            <span className="font-semibold text-[#5D4037]">1–2 hours</span>.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;