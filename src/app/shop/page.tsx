import GreenHeader from '@/components/GreenHeader';
import React from 'react';
import Shop from '@/components/Shop';
import ShopLogo from '@/components/ShopLogo';
import ShopHero1 from '@/components/ShopHero1';
import ShopFilterbar from '@/components/ShopFilterbar';
import ShophCards from '@/components/ShophCards';


export default function ShopPage() {
  return (
    <div className="px-[135px]">
      <GreenHeader />
      <ShopHero1/>
      <ShophCards/>
      <ShopFilterbar/>
      <ShopLogo/>
      <Shop/>
   
      
     
     
     
    </div>
  );
}
