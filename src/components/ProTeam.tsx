import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { teamMembers } from "@/constant/TeamCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Card: React.FC<{ image: string; name: string; profession: string }> = ({
  image,
  name,
  profession,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-md mb-4"
        width={500}
        height={300}
      />
      <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-500 mb-4 text-center">
        <span className="text-sm font-semibold text-gray-500">{profession}</span>
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" className="text-blue-400 hover:text-gray-900">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-blue-400 hover:text-gray-900">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-blue-600 hover:text-gray-900">
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

const ProTeam: React.FC = () => {
  return (
    <div className="text-gray-800 font-sans">
      <div className="container mx-auto py-10 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Problems trying to resolve the conflict between
            <br className="hidden sm:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              profession={member.profession}
            />
          ))}
        </div>
      </div>
      <div className="py-[160px] flex flex-col items-center">
        <div className="max-w-[547px] text-center mb-[30px]">
          <h2 className="text-[40px] font-bold text-[#252B42] leading-[50px] mb-[30px]">
            Start your 14 days free trial
          </h2>
          <p className="text-[14px] text-[#737373] leading-[20px] mb-[30px] max-w-[411px] mx-auto">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <Button className="bg-[#23A6F0] text-white font-bold text-[14px] px-10 py-[15px] h-[52px] mb-[36px]">
            Try it free now
          </Button>
        </div>
        <div className="flex gap-[34px] items-center">
          <Link href="#" className="w-[30px] h-[30px]">
            <FaTwitter />
          </Link>
          <Link href="#" className="w-[30px] h-[30px]">
            <FaFacebook />
          </Link>
          <Link href="#" className="w-[30px] h-[30px]">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProTeam;
