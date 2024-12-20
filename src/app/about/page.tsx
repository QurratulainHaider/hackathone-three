import About from '@/components/About'
import AboutCompanies from '@/components/AboutCompanies'
import AboutHero from '@/components/AboutHero'
import AboutTeam from '@/components/AboutTeam'
import AboutTestimonial from '@/components/AboutTestimonial'
import BlueHeader from '@/components/BlueHeader'

import React from 'react'

export default function AboutPage() { {
  return (
    <div className="px-[135px] ">
        <BlueHeader/>
        <About/>
        <AboutHero/>
        <AboutTeam/>
        <AboutCompanies />
        <AboutTestimonial/>
       

    </div>
  )
}

}