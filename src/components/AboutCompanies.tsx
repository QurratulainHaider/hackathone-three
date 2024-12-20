
const ClientLogos = () => {
  const clients = [
    {
      name: "Hooli",
      logo: "/images/hooli.png",
    },
    {
      name: "Lyft",
      logo: "/images/Vector.png",
    },
    {
      name: "Leave",
      logo: "/images/leave.png",
    },
    {
      name: "Strip",
      logo: "/images/strip.png",
    },
    {
      name: "AWS",
      logo: "/images/AWS.png",
    },
    {
      name: "Client 6",
      logo: "/images/client6.png",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 overflow-x-auto">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center w-[150px]">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-[75px] w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Companies Component
const Companies = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Big Companies Are Here</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          <br className="hidden md:block" />
          Newtonian mechanics.
        </p>
      </div>

      {/* ClientLogos Component */}
      <ClientLogos />

  
    </div>
    
  );
};

export default  ClientLogos;
