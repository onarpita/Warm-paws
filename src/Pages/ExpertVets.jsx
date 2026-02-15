import React, { useEffect, useState } from "react";
import { FaStethoscope } from "react-icons/fa";

const ExpertVets = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("/expert.json")
      .then((res) => res.json())
      .then((data) => setVets(data));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#8D6E63] mb-10 flex justify-center items-center gap-2">
          <FaStethoscope className="text-[#8D6E63]" /> Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="p-5 rounded-2xl shadow-lg border border-[#8D6E63]/10 hover:shadow-xl transition-all"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-[#8D6E63]/30"
              />
              <h3 className="text-xl font-bold text-[#8D6E63] mb-1">
                {vet.name}
              </h3>
              <p className="text-gray-600 font-semibold">{vet.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;