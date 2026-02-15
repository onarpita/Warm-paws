import React from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const BookNow = () => {
  const { state } = useLocation();
  const { service } = state || {};
  const navigate = useNavigate();

  if (!service) {
    return <p className="text-center py-20">Service not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();

    if (!name || !email) {
      Swal.fire({
        title: "Please fill in all fields!",
        icon: "warning",
        confirmButtonColor: "#8D6E63",
      });
      return;
    }

    Swal.fire({
      title: "Booked successfully!",
      text: `You booked "${service.serviceName}" successfully.`,
      icon: "success",
      confirmButtonColor: "#8D6E63",
    });

    e.target.reset();
    navigate("/");
  };

  return (
    <div className="container mx-auto py-35">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#8D6E63] mb-4">
          Book: {service.serviceName}
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Fill the form below to complete your booking.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <button
            type="submit"
            className="btn w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;