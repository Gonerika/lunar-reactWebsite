import React from "react";

function FeaturesDetail2() {
  return (
    <>
      <div className="py-12 bg-blue-50 w-full min-h-screen flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-12">
          {/* Title Section */}
          <div className="lg:text-center">
            <h2 className="mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
              Why choose us?
            </h2>
            <h1 className="mt-2 text-xl md:text-3xl font-bold text-gray-800 text-center sm:text-4xl">
              Secure, Reliable, and Affordable Solutions
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600 text-center">
              At Lunar I.T. Solutions, we build secure web, mobile, and desktop applications with responsive designs and
              intuitive interfaces at affordable prices.
            </p>
          </div>

          {/* Features Section */}
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img src="/Images/FeaturesMore/Performance.png" alt="Responsive Design" className="w-8 h-8" />
                  </div>
                  <p className="ml-16 text-lg font-bold leading-6 text-gray-700">Responsive Design</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  We create visually stunning, mobile-friendly designs that adapt seamlessly to any screen size,
                  ensuring a smooth user experience.
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img src="/Images/FeaturesMore/Cost.svg" alt="Affordable Pricing" className="w-8 h-8" />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">Affordable Pricing</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Get cost-effective development solutions without compromising on quality, designed to suit your
                  budget.
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img src="/Images/FeaturesMore/web.svg" alt="Web App Development" className="w-8 h-8" />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">Web App Development</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Build fast, scalable, and feature-rich web applications optimized for modern needs and business goals.
                </dd>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img src="/Images/FeaturesMore/mobile.svg" alt="Mobile App Development" className="w-8 h-8" />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">Mobile App Development</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Deliver seamless user experiences with secure, high-performance mobile applications for Android and
                  iOS platforms.
                </dd>
              </div>

              {/* Feature 5 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img src="/Images/FeaturesMore/Desktop.svg" alt="Desktop App Development" className="w-8 h-8" />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">Desktop App Development</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Enhance internal operations with powerful and reliable desktop applications tailored to your workflows.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-8 pb-6 md:pb-8">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default FeaturesDetail2;
