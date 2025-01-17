import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { BookOpen, Code2, FileJson, Globe, Terminal, Workflow } from 'lucide-react';

function OurCourses() {
  const courses = [
    {
      title: "Java",
      description: "Master Java programming with hands-on projects and real-world applications.",
      icon: <Terminal className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Python",
      description: "Learn Python for web development, data science, AI, and automation.",
      icon: <Code2 className="w-12 h-12 text-blue-600" />
    },
    {
      title: "HTML",
      description: "Build the foundation of web development with modern HTML5.",
      icon: <Globe className="w-12 h-12 text-blue-600" />
    },
    {
      title: "CSS",
      description: "Create stunning web designs with advanced CSS techniques.",
      icon: <Workflow className="w-12 h-12 text-blue-600" />
    },
    {
      title: "React",
      description: "Build modern web applications with React and its ecosystem.",
      icon: <BookOpen className="w-12 h-12 text-blue-600" />
    },
    {
      title: "JavaScript",
      description: "Master modern JavaScript for front-end and back-end development.",
      icon: <FileJson className="w-12 h-12 text-blue-600" />
    },
  ];

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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  return (
    <div id="courses" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive selection of programming courses designed to take you from beginner to professional.
          </p>
        </div>
        
        <div className="relative px-4 sm:px-8">
          <Slider {...settings} className="course-slider">
            {courses.map((course, index) => (
              <div key={index} className="px-3 py-2">
                <div className="h-full bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-full p-4 bg-blue-50">
                        {course.icon}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">
                      {course.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-8 text-center flex-grow overflow-hidden h-20">
                      {course.description}
                    </p>
                    
                    <button
                      onClick={() => navigate("/courses/applyForNewCourse", { 
                        state: { course: course.title } 
                      })}
                      className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurCourses;