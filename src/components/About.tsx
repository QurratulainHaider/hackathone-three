import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-base font-bold text-[#252B42]">ABOUT COMPANY</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#252B42] leading-tight">
              ABOUT US
            </h1>
            <p className="text-lg text-[#737373] max-w-md">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <Button className="bg-[#23A6F0] hover:bg-[#1a7db3] text-white px-10">
              Get Quote Now
            </Button>
          </div>

          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="/images/shopping woman.png"
                alt="Shopping woman"
                width={571}
                height={668}
                className="object-cover w-full h-auto max-w-[571px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
