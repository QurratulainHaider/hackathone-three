// src\app\about\pricing\page.tsx
import BlueHeader from "@/components/Pricing/BlueHeader";
import PricingComponent from "@/components/Pricing/Pricing";
import PricingCards from "@/components/Pricing/PricingCards";
import PricingFAQs from "@/components/Pricing/PricingFAQs";
import PricingLogo from "@/components/Pricing/PricingLogo";

export default function Pricing() { {
    return (
      <div className="px-[135px] ">
        <BlueHeader/>
        <PricingComponent/>
        <PricingCards/>
        <PricingLogo/>
        <PricingFAQs/>
       
  
      </div>
    )
  }
  
  }