'use client'

import { ChevronRight } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDescription() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1056px] mx-auto py-6 md:py-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full border-b justify-start rounded-none h-auto">
            <TabsTrigger 
              value="description" 
              className="font-montserrat text-sm font-semibold px-6 py-6 data-[state=active]:text-[#23856D]"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="additional" 
              className="font-montserrat text-sm font-semibold px-6 py-6"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="font-montserrat text-sm font-semibold px-6 py-6"
            >
              Reviews (0)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Image Column */}
              <div className="relative aspect-square md:aspect-[0.85]">
                <div className="absolute inset-[3px] bg-[rgba(196,196,196,0.2)] rounded-md">
                  <img
                    src="/images/hp.png"
                    alt="Product"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>

              {/* Description Column */}
              <div className="flex flex-col gap-8">
                <h2 className="font-montserrat font-bold text-2xl text-[#252B42] leading-tight tracking-tight">
                  the quick fox jumps over
                </h2>
                <div className="font-montserrat text-sm text-[#737373] leading-relaxed space-y-4">
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                    consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                    consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                    consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              {/* Features Column */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-montserrat font-bold text-2xl text-[#252B42] leading-tight tracking-tight">
                    the quick fox jumps over
                  </h2>
                  <ul className="space-y-2.5">
                    {[...Array(4)].map((_, i) => (
                      <li key={i} className="flex items-center gap-5">
                        <ChevronRight className="w-2.5 h-4 text-[#737373]" />
                        <span className="font-montserrat font-bold text-sm text-[#737373]">
                          the quick fox jumps over the lazy dog
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-6">
                  <h2 className="font-montserrat font-bold text-2xl text-[#252B42] leading-tight tracking-tight">
                    the quick fox jumps over
                  </h2>
                  <ul className="space-y-2.5">
                    {[...Array(3)].map((_, i) => (
                      <li key={i} className="flex items-center gap-5">
                        <ChevronRight className="w-2.5 h-4 text-[#737373]" />
                        <span className="font-montserrat font-bold text-sm text-[#737373]">
                          the quick fox jumps over the lazy dog
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="additional">
            <div className="py-8 text-center text-[#737373]">
              Additional information content
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="py-8 text-center text-[#737373]">
              No reviews yet
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

