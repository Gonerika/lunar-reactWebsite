import React from "react";

function FeaturesDetail1() {
  return (
    <>
      <div className="py-12 bg-blue-50 w-full min-h-screen flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-12">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
              Why choose us?
            </h2>
            <h1 className="mt-2 text-xl md:text-3xl font-bold text-gray-800 text-center sm:text-4xl">
              Fast, Reliable, and Secure Hosting Solutions
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600 text-center">
              At Lunar I.T. Solutions, we offer fast, secure, and scalable hosting solutions. From cloud databases to
              website hosting, we ensure top performance and reliability for your business.
            </p>
          </div>

          {/* Features Section */}
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img
                      src="/Images/FeaturesMore/Performance.png"
                      alt="Reliable Performance"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">
                    Reliable Performance
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Our servers are optimized for high-speed performance and minimal downtime, ensuring your applications
                  run smoothly.
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img
                      src="/Images/FeaturesMore/Cost.svg"
                      alt="Cost Effective Plans"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">
                    Cost Effective Plans
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Choose from a variety of hosting packages tailored to meet your specific needs at affordable rates.
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img
                      src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                      alt="Scalability"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">Scalability</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Easily upgrade your hosting resources as your business grows, with no interruptions or hidden costs.
                </dd>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
                    <img
                      src="/Images/FeaturesMore/Customer Support.svg"
                      alt="Customer Support"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 text-gray-800">Customer Support</p>
                </dt>
                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-600">
                  Our dedicated support team is available 24/7 to assist you with any technical issues or queries.
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

export default FeaturesDetail1;
