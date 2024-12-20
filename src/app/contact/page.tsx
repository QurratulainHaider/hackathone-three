import React from 'react';
import ContactHero from '@/components/ContactHero'; 
import BlueHeader from '@/components/BlueHeader'; 
import ContactOffice from '@/components/ContactOffice';
import ContactTalk from '@/components/ContactTalk';

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
