import { Button } from "@/components/ui/button";
import { PiArrowBendRightDown } from "react-icons/pi";

export default function CTASection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="flex flex-col items-center justify-center space-y-9">
          <div className="flex flex-col items-center space-y-4 relative">
            {/* Arrow */}
            <PiArrowBendRightDown 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[#23A6F0]" 
              size={48} 
            />
            {/* Content */}
            <h3 className="text-base font-bold text-[#252B42] text-center tracking-wide">
              WE CAN'T WAIT TO MEET YOU
            </h3>
            <h2 className="text-4xl md:text-[58px] font-bold text-[#252B42] text-center leading-[80px] tracking-[0.2px]">
              Let's Talk
            </h2>
            
            {/* Button */}
            <Button 
              className="bg-[#23A6F0] text-white font-bold px-10 py-[15px] h-[52px] w-[186px] mt-4 hover:bg-[#23A6F0]/90 text-sm tracking-[0.2px]"
            >
              Try it free now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
