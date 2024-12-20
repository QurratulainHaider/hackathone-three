import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function ContactHero() {
  return (
    <div className="relative w-full min-h-[882px] bg-white overflow-hidden">
      

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-24 lg:pt-32">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h5 className="text-[#252B42] font-bold text-base tracking-wide">
                CONTACT US
              </h5>
              <h1 className="text-5xl lg:text-[58px] font-bold text-[#252B42] leading-[1.38] tracking-wide max-w-[393px]">
                Get in touch today!
              </h1>
              <p className="text-xl text-[#737373] leading-[1.5] tracking-wide max-w-[376px]">
                We know how large objects will act, but things on a small scale
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-bold text-[#252B42] leading-[1.33] tracking-[0.1px]">
                Phone : +451 215 215
              </p>
              <p className="text-2xl font-bold text-[#252B42] leading-[1.33] tracking-[0.1px]">
                Fax : +451 215 215
              </p>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <a 
                href="#" 
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={30} />
              </a>
              <a 
                href="#" 
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={30} />
              </a>
              <a 
                href="#" 
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={30} />
              </a>
              <a 
                href="#" 
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={30} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-full min-h-[600px] lg:min-h-[826px]">
            <Image
              src="/images/contact/hero.png"
              alt="Family shopping together"
              width={571}
              height={826}
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

