// src\app\blog\page.tsx
import BlogHero from '@/components/Blog/BlogHero';
import BlogList from '@/components/Blog/BlogList';
import BlogLogo from '@/components/Blog/BlogLogo';
import BlogSeller from '@/components/Blog/BlogSeller';

import BlueHeader from '@/components/Pricing/BlueHeader';
import React from 'react'

export default function Blog() {
  return ( 
    <div className="px-[135px] pt-[50px] pb-[50px]">
      

      <BlueHeader/>
      <BlogList />
      <BlogHero/>
      <BlogSeller/>
      <BlogLogo/>
    </div>
  );
}
