export default function TestimonialSection() {
    return (
      <section className="relative w-full min-h-[636px] bg-[#2A7CC7] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[636px]">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center items-center text-center text-white space-y-6">
              <h5 className="font-montserrat font-bold text-base tracking-wide">
                WORK WITH US
              </h5>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl tracking-wider leading-tight">
                Now Let's grow Yours
              </h2>
              <p className="font-montserrat text-sm leading-relaxed tracking-wide max-w-[440px]">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
              </p>
              <button className="px-6 py-2 border border-white rounded hover:bg-white hover:text-[#2A7CC7] transition-colors duration-300 font-montserrat font-bold text-sm tracking-wide">
                Button
              </button>
            </div>
  
            {/* Right Column - Image */}
            <div className="flex-1 h-[636px] max-w-[500px]"> {/* Adjusted max width */}
              <img
                src="/images/pink gray.png"
                alt="Professional in coral sweater"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  