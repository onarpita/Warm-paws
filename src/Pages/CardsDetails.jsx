import React from "react";
import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const CardsDetails = () => {
  const { state } = useLocation();
  const { service } = state || {};
  const navigate = useNavigate();

  if (!service) {
    return <p className="text-center py-20">Service not found!</p>;
  }

  const handleBookNow = () => {
    navigate("/book-now", { state: { service } });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6">
        {/* IMAGE + INFO */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-96 object-cover rounded-xl shadow"
            />
          </div>

          {/* Text Info */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-[#8D6E63]">
              {service.serviceName}
            </h2>

            <p className="text-lg text-gray-700">
              <span className="font-semibold">Provider:</span>{" "}
              {service.providerName}
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              {service.providerEmail}
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold">Category:</span>{" "}
              {service.category}
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold">Slots Available:</span>{" "}
              {service.slotsAvailable}
            </p>

            <p className="text-xl text-gray-800">{service.description}</p>

            {/* Rating + Price */}
            <div className="flex justify-between text-xl mt-4">
              <p className="flex items-center gap-1">
                <span className="font-semibold">Rating:</span>
                <FaStar className="text-yellow-500" />
                {service.rating}
              </p>
              <p>
                <span className="font-semibold">Price: $</span>
                {service.price}
              </p>
            </div>

            {/* Book button */}
            <button
              onClick={handleBookNow}
              className="btn bg-[#8D6E63] hover:bg-[#6D4C41] text-white w-full mt-6"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;