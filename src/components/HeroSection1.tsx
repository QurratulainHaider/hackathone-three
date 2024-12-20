import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="relative bg-transparent border-[#DEDEDE] rounded-[5px] overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[716px]">
        <img
          src="/images/main g.png"
          alt="Model showcasing new collection"
          className="w-full h-full object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 gap-6 ">
          <h5 className="font-montserrat font-bold text-sm sm:text-base leading-6 tracking-[0.1px] text-white">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-3xl sm:text-5xl lg:text-[58px] leading-10 lg:leading-[80px] tracking-[0.2px] text-white">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat font-normal text-sm sm:text-lg lg:text-xl leading-[22px] sm:leading-[30px] tracking-[0.2px] text-[#FAFAFA] max-w-[376px]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <Button className="h-[50px] sm:h-[62px] px-6 sm:px-10 bg-[#2DC071] hover:bg-[#2DC071]/90 rounded-[5px] font-montserrat font-bold text-sm sm:text-lg lg:text-2xl leading-6 lg:leading-8 tracking-[0.1px]">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
