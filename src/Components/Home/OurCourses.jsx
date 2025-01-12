import React from "react";
import Slider from "react-slick"; // Import react-slick for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

function OurCourses() {
  const courses = [
    {
      title: "Java",
      description: "One of the popular programming languages for building applications.",
      image: "/Images/Courses/Java1.png",
    },
    {
      title: "Python",
      description: "Master Python, a versatile language used in web development, data analysis, AI, and more.",
      image: "/Images/Courses/Python.png",
    },
    {
      title: "HTML",
      description: "Understand the basics of HTML to structure your web pages and create beautiful websites.",
      image: "/Images/Courses/HTML.png",
    },
    {
      title: "CSS",
      description: "Dive into CSS to design and style websites with advanced layouts, animations, and more.",
      image: "/Images/Courses/CSS.png",
    },
    {
      title: "React",
      description: "Learn React, a JavaScript library for building interactive user interfaces and applications.",
      image: "/Images/Courses/React.png",
    },
    {
      title: "Javascript",
      description: "Master Javascript, a powerful runtime environment for building applications.",
      image: "/Images/Courses/JS.png",
    },
    {
      title: "Flutter",
      description: "Learn Flutter to build beautiful, natively compiled applications.",
      image: "/Images/Courses/Flutter.png",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  return (
    <div id="courses" className="py-12 bg-blue-50">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center mb-10">
        Our Courses
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden mx-6"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 flex flex-col items-center text-center">
                <h2 className="text-lg font-bold text-blue-800 mb-3">{course.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <button
                  onClick={() =>
                    navigate("/courses/applyForNewCourse", { state: { course: course.title } })
                  }
                  className="mt-auto bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurCourses;
