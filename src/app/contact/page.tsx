// src/app/contact/page.tsx
import React from 'react';
import ContactHero from '@/components/Contact/ContactHero'; 
import BlueHeader from '@/components/Pricing/BlueHeader'; 
import ContactOffice from '@/components/Contact/ContactOffice';
import ContactTalk from '@/components/Contact/ContactTalk';

export default function ContactPage() {
  return (
    <div className="px-[135px] overflow-hidden">
      <BlueHeader />
      <ContactHero />
      <ContactOffice/>
      <ContactTalk/>
    </div>
  );
}
