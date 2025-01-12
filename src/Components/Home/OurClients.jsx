import React from "react";

const OurClients = () => {
  const clients = [
    { id: 1, src: "/Images/Client/client1.png", alt: "Client 1" },
    { id: 2, src: "/Images/Client/client2.png", alt: "Client 2" },
    { id: 3, src: "/Images/Client/client3.png", alt: "Client 3" },
    { id: 4, src: "/Images/Client/client4.png", alt: "Client 4" },
    { id: 5, src: "/Images/Client/client5.png", alt: "Client 5" },
    { id: 6, src: "/Images/Client/client6.png", alt: "Client 6" },
  ];

  return (
    <div id="ourClient" className="py-4 bg-blue-50">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 text-center mt-3">Meet Our Clients</h2>
        <p className="text-gray-600 text-center mt-2 text-sm mb-10">
          We are proud to collaborate with these amazing companies.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex items-center animate-scroll space-x-8 w-max">
          {clients.concat(clients).map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt}
              className="h-20 w-auto"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default OurClients;
