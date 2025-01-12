import React, { useState, useEffect } from "react";

function Banner() {
  const images = [
    "/Images/Banner/Banner1.webp", // Replace with your image URLs
    "/Images/Banner/Banner2.jpeg",
    "/Images/Banner/Banner3.jpg",
    "/Images/Banner/Banner4.jpg",
    "/Images/Banner/Banner5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div
      id="banner"
      className="w-full h-[100vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image transition-transform duration-1000 ease-out", // Smooth transition
      }}
    >
      {/* Overlay for content */}
      <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center px-6 py-12">
        <div className="text-center flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold text-white leading-snug tracking-wide drop-shadow-md">
            Lunar IT Solutions
          </h1>
          <p className="text-lg text-gray-300 font-medium">
            Crafting Innovation, Delivering Excellence, Inspiring Impact
          </p>
          <div className="flex gap-6 mt-8 flex-wrap justify-center">
            <a
              href="#"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:bg-red-700 hover:scale-105"
            >
              Get Connected
            </a>
            <a
              href="#"
              className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:bg-blue-700 hover:scale-105"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
