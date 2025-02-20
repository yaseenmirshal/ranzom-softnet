import React from "react";

const clients = [
  { id: 1, name: "Company A", logo: "/logos/daamweblogo.png" },
  { id: 2, name: "Company B", logo: "/logos/fzwhite.jpeg" },
  { id: 3, name: "Company C", logo: "/logos/imbamweblogo.png" },
  { id: 4, name: "Company D", logo: "/logos/jazalogo2.png" },
  { id: 5, name: "Company E", logo: "/logos/mytouchweblogo.png" },
  { id: 6, name: "Company F", logo: "/logos/stylicle web.png" },
  { id: 7, name: "Company G", logo: "/logos/walrusweb.png" },
];

const Clients = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-black mb-10">Our Clients</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center space-x-10"
          style={{ animation: "scroll 20s linear infinite" }}
        >
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-28 flex items-center justify-center">
              <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Define the infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
