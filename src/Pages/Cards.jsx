import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Cards = () => {
  const [services, setServices] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  // Sort logic
  const sortedServices = [...services].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  // Show first 8 services
  const displayedServices = sortedServices.slice(0, 8);

  return (
    <div className="container mx-auto py-16">
      <div>
        <h2 className="text-3xl text-center  font-bold text-[#8D6E63]">
          Popular Winter Care Services
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-end mb-6 gap-4">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="sort" className="text-gray-700 font-semibold"></label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered border-gray-300"
          >
            <option value="">Default</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedServices.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-[#8D6E63]">
                {service.serviceName}
              </h3>
              <p class="text-sm font-semibold text-gray-600">
                {service.description ? service.description.slice(0, 60) : ""}
                ...
              </p>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 flex items-center gap-1">
                  <span className="font-semibold">Rating : </span>
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">{service.rating}</span>
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Price : $ </span>
                  <span className="font-bold">{service.price}</span>
                </p>
              </div>

              <Link
                to={`/details/${service.serviceId}`}
                state={{ service }}
                className="btn w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Link
          to="/all-items"
          className="btn btn-outline btn-sm border-[#8D6E63] text-[#8D6E63] hover:bg-[#8D6E63] hover:text-white "
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Cards;