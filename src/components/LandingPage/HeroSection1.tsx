// src/components/LandingPage/HeroSection1.tsx
'use client'

import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

interface CategoryCard {
  title: string
  image: string
  className?: string
}

const categories: CategoryCard[] = [
  {
    title: 'MEN',
    image: '/images/media cover.png',
    className: 'col-span-2 row-span-2'
  },
  {
    title: 'WOMEN',
    image: '/images/girlcover.png',
    className: 'col-span-1 row-span-2'
  },
  {
    title: 'ACCESSORIES',
    image: '/images/media bg.png',
    className: 'col-span-1 row-span-1'
  },
  {
    title: 'KIDS',
    image: '/images/filter.png',
    className: 'col-span-1 row-span-1'
  }
]

export default function CategoryGrid() {
  return (
    <section className={`bg-[#FAFAFA] py-20 ${montserrat.className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#252B42] text-2xl md:text-3xl font-bold mb-2.5 tracking-tight">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-[#737373] text-sm md:text-base">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 max-w-[1050px] mx-auto">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`relative group overflow-hidden ${category.className}`}
            >
              <div className="relative h-full min-h-[240px] w-full">
                <Image
                  src={category.image}
                  alt={`${category.title} category`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/40" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="bg-white px-8 py-3">
                    <h3 className="text-[#252B42] font-bold text-base tracking-tight whitespace-nowrap">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

