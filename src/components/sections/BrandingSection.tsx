import React from 'react';

export function BrandingSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[60px] py-8 sm:py-10 md:py-12">
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-header mb-6 sm:mb-8 md:mb-[49px] w-full">
          BRANDING
        </h2>
        <div className="mx-auto max-w-[840px]">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-[10px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-full aspect-[202/158] bg-[#C02830] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center transition-transform hover:scale-[1.02]"
              >
                <span className="text-white text-sm sm:text-base">Project Thumbnail</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 