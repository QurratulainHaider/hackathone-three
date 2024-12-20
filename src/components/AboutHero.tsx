import React from "react";

export default function ContentWithStats() {
  const stats = [
    { value: "15K", title: "Happy Customers" },
    { value: "150K", title: "Monthly Visitors" },
    { value: "15", title: "Countries Worldwide" },
    { value: "100+", title: "Top Partners" },
  ];

  return (
    <>
      {/* Content Section */}
      <section className="w-full bg-white">
        <div className="mx-auto flex flex-col items-center py-4 max-w-[1440px]">
          <div className="flex flex-row justify-center items-center gap-12 w-full">
            <div className="flex flex-col items-start py-6 gap-12 w-[394px]">
              <div className="flex flex-col items-start gap-4 w-full">
                <p className="text-[#E74040] text-bold text-sm leading-5 tracking-[0.2px] font-normal font-montserrat">
                  Problems trying
                </p>
                <h2 className="text-[#252B42] text-2xl leading-8 tracking-[0.1px] font-bold font-montserrat">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-[529px]">
              <p className="text-[#737373] text-sm leading-5 tracking-[0.2px] font-normal font-montserrat w-[545px]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="flex flex-col items-center w-full max-w-[1440px] mx-auto py-16 px-4">
          <div className="flex flex-row justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-[240px]"
              >
                <h1 className="font-montserrat text-4xl md:text-5xl font-bold leading-[80px] text-[#252B42]">
                  {stat.value}
                </h1>
                <h5 className="font-montserrat text-base md:text-lg font-bold text-[#737373]">
                  {stat.title}
                </h5>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Image Section */}
      <section className="flex justify-center py-8">
        <img
          src="/images/media bg-cover.png"
          alt="Descriptive text"
          width="989"
          height="540"
          className="rounded-lg shadow-md"
        />
      </section>
    </>
  );
}
