"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function BlogList() {
  const [activeImage, setActiveImage] = React.useState(0)
  const images = [
    "/images/carousel-inner.png",
    "/images/chair.png",
  ]

  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="mx-auto max-w-[1050px]">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="relative">
            <div className="relative h-[450px] w-full overflow-hidden rounded-lg">
              <Image
                src={images[activeImage]}
                alt="Product image"
                className="object-cover"
                fill
              />
              <button 
                className="absolute left-10 top-1/2 -translate-y-1/2"
                onClick={() => setActiveImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
              >
                <ChevronLeft className="h-11 w-6 text-white" />
              </button>
              <button 
                className="absolute right-10 top-1/2 -translate-y-1/2"
                onClick={() => setActiveImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
              >
                <ChevronRight className="h-11 w-6 text-white" />
              </button>
            </div>
            <div className="mt-4 flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "h-[75px] w-[100px] overflow-hidden rounded-lg",
                    activeImage !== index && "opacity-50"
                  )}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={75}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <Card>
            <CardContent className="p-6">
              <h1 className="text-xl font-normal text-[#252B42]">Hug Ming Phone</h1>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-[#F3CD03]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="h-5 w-5 fill-[#F3CD03] opacity-50"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[#737373]">10 Reviews</span>
              </div>
              <div className="mt-3 text-2xl font-bold text-[#252B42]">$1,139.33</div>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-sm font-bold text-[#737373]">Availability :</span>
                <span className="text-sm font-bold text-[#23A6F0]">In Stock</span>
              </div>
              <p className="mt-7 text-sm leading-5 text-[#858585]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <hr className="my-7 border-[#BDBDBD]" />
              <div className="flex gap-2">
                {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color) => (
                  <button
                    key={color}
                    className="h-[30px] w-[30px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2">
                <Button className="h-11 bg-[#23A6F0] px-5 font-bold hover:bg-[#23A6F0]/90">
                  Select Options
                </Button>
                {[Heart, ShoppingCart, Eye].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-[#E8E8E8]"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

