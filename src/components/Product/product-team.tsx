// src/components/Product/product-team.tsx
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/constant/product-card";

export const ProductTeam: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#252B42]">
            Meet Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((item) => (
            <Card key={item.name} className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={329}
                    height={231}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center p-6 space-y-2">
                  <h3 className="font-bold text-base text-[#252B42]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#737373] font-bold">
                    {item.profession}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-[#23A6F0] hover:text-[#23A6F0]/80"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-[#23A6F0] hover:text-[#23A6F0]/80"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-[#23A6F0] hover:text-[#23A6F0]/80"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeam;
