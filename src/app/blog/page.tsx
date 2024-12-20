import BlogHero from '@/components/BlogHero';
import BlogList from '@/components/BlogList';
import BlogLogo from '@/components/BlogLogo';
import BlogSeller from '@/components/BlogSeller';

import BlueHeader from '@/components/BlueHeader';
import React from 'react'

export default function BlogPage() {
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
