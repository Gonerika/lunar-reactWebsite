import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <div id="features" className="bg-blue-100 flex items-center justify-center py-8 px-4 ">
      <div className="w-full max-w-5xl">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center mb-10">
          Features and Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-0">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-indigo-900 ring-opacity-40 flex flex-col">
            <div className="w-full h-48">
              <img
                className="w-full h-full object-cover"
                src="/Images/Features/hosting2.png"
                alt="Hosting Services"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-center">Hosting Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lunar I.T. Solution offers fast, secure, and affordable hosting
                services with domain registration. Choose from a range of packages tailored to your application's needs.
              </p>
              <div className="flex justify-center items-center mt-auto">
              <Link to="/features/featuresDetail1">
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  More
                </button>
              </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-indigo-900 ring-opacity-40 flex flex-col">
            <div className="w-full h-48">
              <img
                className="w-full h-full object-cover"
                src="/Images/Features/webappdev.png"
                alt="Web/App Development"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-center">Web/App Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lunar I.T. Solution develops secure and reliable web, desktop, and mobile applications using .NET Core and .NET Framework at affordable prices.
              </p>
              <div className="flex justify-center items-center mt-auto">
                <Link to="/features/featuresDetail2">
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
