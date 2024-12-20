'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  description: string
  price: number
  features: PricingFeature[]
  highlighted?: boolean
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingTiers: PricingTier[] = [
    {
      name: "FREE",
      description: "Organize across all apps by hand",
      price: 0,
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email and community support", included: false },
      ]
    },
    {
      name: "STANDARD",
      description: "Organize across all apps by hand",
      price: 9.99,
      highlighted: true,
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email and community support", included: false },
      ]
    },
    {
      name: "PREMIUM",
      description: "Organize across all apps by hand",
      price: 19.99,
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email and community support", included: false },
      ]
    }
  ]

  return (
    <section className="w-full bg-[#FAFAFA] py-28 font-montserrat">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#252B42] text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-[#737373] text-sm max-w-xl mx-auto mb-8">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? 'text-[#252B42]' : 'text-[#737373]'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-[#23A6F0]"
            />
            <span className={`text-sm font-bold ${isYearly ? 'text-[#252B42]' : 'text-[#737373]'}`}>
              Yearly
            </span>
            <span className="ml-2 bg-[#B3E3FF] text-[#23A6F0] px-5 py-2 rounded-full text-sm font-bold">
              Save 25%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-lg border border-[#23A6F0] p-10 flex flex-col items-center ${
                tier.highlighted ? 'bg-[#252B42] text-white' : 'bg-white text-[#252B42]'
              }`}
            >
              <h3 className="text-2xl font-bold mb-8">{tier.name}</h3>
              <p className={`text-center mb-8 ${tier.highlighted ? 'text-white' : 'text-[#737373]'}`}>
                {tier.description}
              </p>
              
              <div className="flex items-center gap-2 mb-8">
                <span className="text-4xl font-bold text-[#23A6F0]">${tier.price}</span>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-[#23A6F0]">$</span>
                  <span className="text-sm text-[#8EC2F2]">Per Month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 w-full">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      feature.included ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'
                    }`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm font-bold ${
                      tier.highlighted ? 'text-white' : 'text-[#252B42]'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  tier.highlighted 
                    ? 'bg-[#23A6F0] hover:bg-[#1a94d8] text-white' 
                    : 'bg-[#252B42] hover:bg-[#1e2534] text-white'
                }`}
              >
                Try for free
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

