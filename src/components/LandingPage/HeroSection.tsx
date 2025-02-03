// src/components/LandingPage/HeroSection.tsx
import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/hero.png"
        alt="Hero banner"
        width={1440}
        height={716}
        priority
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

