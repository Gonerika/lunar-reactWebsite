import React from "react";

function OurProducts() {
  return (
    <>
    <div className="bg-blue-100 py-4 px-4">
      {/* Our Products */}
      <h1 id="ourproducts" className="text-center text-xl md:text-3xl font-bold text-gray-800 mb-4 mt-3">
        Our Products
      </h1>
      <div
        id="products"
        className="flex flex-wrap justify-center gap-8 mx-auto px-5 py-5"
      >
        {/* Product 1 */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 w-72">
          <div className="relative">
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
              -25%
            </span>
            <img
              src="/Images/Products/sms2.png"
              alt="Lunar School Management Software"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-blue-900">
              Lunar School Management Software
            </h2>
            <p className="text-sm text-gray-600 mt-2 mb-4 leading-5">
              A comprehensive solution designed to streamline school operations,
              including attendance tracking, grade management, and communication tools.
            </p>
            <p className="text-lg font-bold text-green-600">
              Rs.3000 <span className="line-through text-gray-500 text-sm">Rs.4000</span>
            </p>
            <div className="text-yellow-500 text-sm mt-2">★★★★★ (10)</div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 w-72">
          <div className="relative">
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
              -12.5%
            </span>
            <img
              src="/Images/Products/luna.png"
              alt="Lunaccount (Cooperative Software)"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-blue-900">
              Lunaccount (Cooperative Software)
            </h2>
            <p className="text-sm text-gray-600 mt-2 mb-4 leading-5">
              Simplify cooperative management with features like member tracking, loan
              management, and financial reporting.
            </p>
            <p className="text-lg font-bold text-green-600">
              Rs.3500 <span className="line-through text-gray-500 text-sm">Rs.4000</span>
            </p>
            <div className="text-yellow-500 text-sm mt-2">★★★★☆ (6)</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default OurProducts;
