import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AllItems = () => {
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

  return (
    <div className="container mx-auto py-16">
      {/* Header + Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold text-[#8D6E63] text-center md:text-left flex-1">
          All Winter Care Services
        </h2>

        <div className="flex items-center gap-4">
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

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedServices.map((service) => (
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
              <p className="text-gray-600 flex items-center gap-1">
                <span className="font-semibold">Rating: </span>
                <FaStar className="text-yellow-500" />
                <span className="font-bold">{service.rating}</span>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Price: $ </span>
                <span className="font-bold">{service.price}</span>
              </p>

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
    </div>
  );
};

export default AllItems;