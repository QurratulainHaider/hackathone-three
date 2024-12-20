export default function ClientLogos() {
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
      <section className="w-full bg-[#FAFAFA]">
        <div className="container mx-auto max-w-[1054px] h-[175px]">
          <div className="flex justify-center items-center gap-8 py-12 px-4 overflow-x-auto">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center w-[150px]"
              >
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
  }
  