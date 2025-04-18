'use client';

import { PortfolioBanner } from '@/components/sections/PortfolioBanner';
import { HighlightedProjectComponent } from '@/components/sections/HighlightedProjectComponent';
import { UISection } from '@/components/sections/UISection';
import { BrandingSection } from '@/components/sections/BrandingSection';
import { MarketingSection } from '@/components/sections/MarketingSection';

export default function PortfolioPage() {
  return (
    <div className="-mt-24">
      <main className="min-h-screen bg-[#15102A] overflow-x-hidden flex flex-col">
        <PortfolioBanner />
        <div className="flex-1">
          <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-[60px] py-8 sm:py-12 md:py-16 lg:py-[60px]">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-header">
              PORTFOLIO
            </h1>
          </div>
          <div className="px-4 sm:px-8 md:px-12 lg:px-[60px]">
            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-[60px] mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]">
              <HighlightedProjectComponent />
              <HighlightedProjectComponent reversed />
            </div>
          </div>
          <UISection />
          <BrandingSection />
          <MarketingSection />
        </div>
      </main>
    </div>
  );
} 