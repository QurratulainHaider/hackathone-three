
import BlueHeader from "@/components/BlueHeader";
import Pricing from "@/components/Pricing";
import PricingCards from "@/components/PricingCards";
import PricingFAQs from "@/components/PricingFAQs";
import PricingLogo from "@/components/PricingLogo";
export default function PricingPage() { {
    return (
      <div className="px-[135px] ">
        <BlueHeader/>
        <Pricing/>
        <PricingCards/>
        <PricingLogo/>
        <PricingFAQs/>
       
  
      </div>
    )
  }
  
  }