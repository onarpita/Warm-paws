import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const WinterAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/accessories.json")
      .then((res) => res.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleBuyNow = (item) => {
    navigate("/buy-now", { state: { item } });
  };

  return (
    <div className="container mx-auto pb-16 pt-10">
      <h2 className="text-3xl font-bold text-center text-[#8D6E63] mb-10">
        Winter Pet Accessories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#8D6E63]">
                  {item.name}
                </h3>
                <p className="text-gray-700 font-bold">${item.price}</p>
              </div>

              <button
                onClick={() => handleBuyNow(item)}
                className="btn w-full mt-4 bg-[#8D6E63] hover:bg-[#6D4C41] text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterAccessories;