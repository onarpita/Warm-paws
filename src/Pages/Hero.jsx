import React, { useEffect, useState } from "react";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  // fetch carousel data
  useEffect(() => {
    fetch("/carousel.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  // auto-slide
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) {
    return (
      <p className="flex items-center justify-center py-20">
        <span className="loading loading-bars loading-xl"></span>
      </p>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide.type === "hero" ? (
              <div className="w-full bg-gradient-to-r from-[#FCE4EC] via-[#FFF3E0] to-[#F3E5F5] h-[550px] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 py-20">
                <div className="text-center lg:text-left space-y-6">
                  <h1 className="text-5xl font-extrabold text-[#5D4037]">
                    {slide.title}
                  </h1>
                  <p className="text-gray-700 text-lg max-w-xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                  <button className="btn bg-[#8D6E63] hover:bg-[#6D4C41] text-white px-8 py-3 rounded-lg font-semibold shadow-md">
                    {slide.buttonText}
                  </button>
                </div>
                <img
                  src={slide.logo}
                  alt="WarmPaws Logo"
                  className="w-64 lg:w-96 rounded-2xl shadow-2xl bg-white p-4"
                />
              </div>
            ) : (
              <img
                src={slide.img}
                alt=""
                className="w-full h-[550px] object-cover object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {/* navigation buttons */}
      <div className="absolute flex justify-between top-1/2 left-5 right-5 -translate-y-1/2">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="btn btn-circle bg-[#8D6E63] border-none text-white hover:bg-[#6D4C41]"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="btn btn-circle bg-[#8D6E63] border-none text-white hover:bg-[#6D4C41]"
        >
          ❯
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-[#8D6E63]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;