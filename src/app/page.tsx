'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { WipSection } from '@/components/sections/WipSection';
import { BannerSection } from '@/components/sections/BannerSection';
import { MushroomGraphic } from '@/components/sections/MushroomGraphic';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15102A]">
      <div className="relative">
        <HeroSection />
        <MushroomGraphic />
        <WipSection />
      </div>
      <BannerSection />
    </main>
  );
}
