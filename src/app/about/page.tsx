// src\app\about\page.tsx
import About from '@/components/About-Us/About'
import AboutCompanies from '@/components/About-Us/AboutCompanies'
import AboutHero from '@/components/About-Us/AboutHero'
import AboutTeam from '@/components/About-Us/AboutTeam'
import AboutTestimonial from '@/components/About-Us/AboutTestimonial'
import BlueHeader from '@/components/Pricing/BlueHeader'

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