'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const BannerSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section 
        className={cn(
          "fixed top-0 left-0 right-0 w-full h-screen bg-[#15102A] transition-transform duration-500 z-30",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Background Image and Pattern */}
        <div className="fixed top-0 left-0 right-0 bottom-0">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/wireframe-banner.png"
              alt="Banner Background"
              fill
              className="object-cover object-center opacity-50"
              sizes="100vw"
              priority
              quality={100}
            />
            <Image
              src="/assets/images/VectorBG.svg"
              alt="Vector Pattern"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="absolute inset-0 overflow-y-auto">
          <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-8 md:px-4 pt-24">
            {/* Banner Title Section */}
            <div className="w-full max-w-[66rem] mb-8 md:mb-16">
              <div className="bg-[#4895EF] rounded-full px-8 md:px-12 py-6 flex items-center justify-center">
                <div className="flex flex-col items-start">
                  <h1 className="text-white text-4xl md:text-[48pt] font-header leading-none">
                    I MADE THIS UI
                  </h1>
                  <p className="text-white text-lg md:text-xl font-hack mt-2">
                    Check out how I did it
                  </p>
                </div>
              </div>
            </div>

            {/* Project Embed Section */}
            <div className="w-full max-w-[66rem] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-24">
              <div className="w-full rounded-[16px] bg-[#15102A]" style={{ aspectRatio: '202/158' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-hack">Embedded Project</span>
                </div>
              </div>
              <div className="w-full rounded-[16px] bg-[#15102A]" style={{ aspectRatio: '202/158' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-hack">Embedded Project</span>
                </div>
              </div>
            </div>

            {/* Learning UI Section */}
            <div className="w-full max-w-[66rem] mb-8 md:mb-16">
              <div className="bg-[#E63946] rounded-full px-6 md:px-8 py-6 md:py-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                  <h2 className="text-white text-3xl md:text-[42pt] font-hack font-bold whitespace-nowrap leading-none">
                    Learning UI?
                  </h2>
                  <p className="text-white text-base md:text-lg font-hack max-w-[35ch] leading-tight text-center sm:text-left">
                    Here are some things I wish I had laid out for me when I started
                  </p>
                </div>
              </div>
            </div>

            {/* Design Tools Section */}
            <div className="w-full max-w-[66rem] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Design Here Widget */}
              <div className="bg-[#A592C6] rounded-[24px] p-4 md:p-6" style={{ aspectRatio: '289/165' }}>
                <div className="h-full flex flex-col items-center">
                  <h3 className="text-white text-2xl md:text-3xl font-hack text-center mb-2 md:mb-4">
                    Start Designing Here
                  </h3>
                  <div className="flex gap-4 justify-center w-full mt-auto">
                    <div className="w-[40%] aspect-square bg-[#15102A] rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <Image
                          src="/assets/icons/figma-icon.svg"
                          alt="Figma"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="w-[40%] aspect-square bg-[#15102A] rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <Image
                          src="/assets/icons/Notes-icon.svg"
                          alt="Notes"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Build It Here Widget */}
              <div className="bg-[#A592C6] rounded-[24px] p-4 md:p-6" style={{ aspectRatio: '289/165' }}>
                <div className="h-full flex flex-col items-center">
                  <h3 className="text-white text-2xl md:text-3xl font-hack text-center mb-2 md:mb-4">
                    Build it Here
                  </h3>
                  <div className="flex gap-4 justify-center w-full mt-auto">
                    <div className="w-[40%] aspect-square bg-[#15102A] rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <Image
                          src="/assets/icons/Cursor-ai-icon.svg"
                          alt="CursorAI"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="w-[40%] aspect-square bg-[#15102A] rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <Image
                          src="/assets/icons/Github-icons.svg"
                          alt="GitHub"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer div to maintain scroll position */}
      <div className="w-full h-screen" />
    </>
  );
}; 