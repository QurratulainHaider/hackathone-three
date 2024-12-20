import React from 'react';
import Image from 'next/image';


import { defaultClients } from '@/constant/logo'; // Update the import path

const PricingLogos = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-xl font-bold text-[#737373] mb-8">
          Trusted By Over 4000 Big Companies
        </h2>

        <div className="flex justify-center items-center gap-8 overflow-x-auto">
          {defaultClients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center w-[150px]"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={150}
                height={75}
                className="max-h-[75px] w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingLogos;
