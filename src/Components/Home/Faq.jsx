import React, { useState } from "react";
import { Link } from "react-router-dom";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What framework is mostly used for development in Lunar IT Solutions?",
      answer: "We use .NET framework for most of the projects.",
    },
    {
      question: "Does Lunar IT Solutions use other framework or libraries if requested for the project?",
      answer: "Yes, we do. We often make projects with Laravel, React JS, Vue.js, etc.",
    },
    {
      question: "Does Lunar IT Solutions have any products for its client currently?",
      answer:
        "Currently we have School Management System (SMS) and Jewelry Management System (Jewel Box) for our customers.",
    },
    {
      question: "Does Lunar IT Solutions develop desktop applications?",
      answer: "We can develop web, desktop, and mobile applications for our customers.",
    },
    {
      question: "Will my staff be comfortable with receiving work from WhatsApp?",
      answer: "Yes, WhatsApp is one of the many communication tools we support.",
    },
  ];

  return (
    <div id="faq" className={`bg-blue-100 py-8 px-4 `}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mt-2 text-sm mb-10">
          Got a question? We're here to answer! If you don’t see your question here, drop us a line on our{" "}
          <a href="#contactUs" className="text-blue-500 font-medium hover:underline">
            Contact Page
          </a>
          
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-md shadow-sm bg-white p-4 transition-transform transform hover:scale-105 hover:shadow-md cursor-pointer ${
                activeIndex === index ? "ring-2 ring-blue-500" : ""
              } ${
                index === faqs.length - 1 && faqs.length % 2 !== 0
                  ? "md:col-span-2 mx-auto"
                  : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-medium text-gray-800">{faq.question}</h2>
                <span className="text-gray-500 text-lg">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              <div
                className={`mt-2 text-gray-600 text-xs transition-opacity duration-300 ${
                  activeIndex === index
                    ? "opacity-100 max-h-screen"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
