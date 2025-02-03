// src\app\shop\page.tsx
import GreenHeader from '@/components/Shop/GreenHeader';
import React from 'react';
import Shop from '@/components/Shop/Shop';
import ShopLogo from '@/components/Shop/ShopLogo';
import ShopHero1 from '@/components/Shop/ShopHero1';
import ShopFilterbar from '@/components/Shop/ShopFilterbar';
import ShophCards from '@/components/Shop/ShophCards';
import Link from 'next/link';


export default function ShopPage() {
  return (
    <div className="px-[135px]">
      <GreenHeader />
      <ShopHero1/>
      <ShophCards/>
      <ShopFilterbar/>
      <ShopLogo/>
      <Shop/>
      {/* Add the Cart link */}
      <div className="mt-4">
        <Link href="/cart">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Go to Cart
          </button>
        </Link>
      </div>
   
      
     
     
     
    </div>
  );
}
