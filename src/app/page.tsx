'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { WipSection } from '@/components/sections/WipSection';
import { BannerSection } from '@/components/sections/BannerSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15102A]">
      <HeroSection />
      <div className="relative">
        <BannerSection />
        <div className="h-screen" />
        <div className="relative z-40">
          <WipSection />
        </div>
      </div>
    </main>
  );
}
