import React, { useEffect, useState } from "react";
import { FaSnowflake, FaPaw } from "react-icons/fa";

const CareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <section className="bg-[#F8F8F8]  py-16">
      <div className="px-10">
        <div className="container mx-auto  text-center">
          <h2 className="text-3xl font-bold text-[#8D6E63] mb-10 flex justify-center items-center gap-2">
            <FaSnowflake className="text-[#8D6E63]" /> Winter Care Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#8D6E63]/10 hover:shadow-xl transition-all"
              >
                <FaPaw className="text-[#8D6E63] text-4xl mb-3 mx-auto" />
                <h3 className="text-xl font-bold text-[#8D6E63] mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 font-semibold">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTips;