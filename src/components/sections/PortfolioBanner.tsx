'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export const PortfolioBanner = () => {
  return (
    <section className="relative w-full h-[480px] overflow-hidden">
      {/* Background Image and Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30rem] bg-primary/20 blur-[10rem] rounded-full" />
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
            className="object-cover object-center opacity-100"
            sizes="100vw"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-[60px]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-11 w-full max-w-[1280px] mx-auto mt-24">
          {/* Banner Heading */}
          <div className="bg-[#2DA9D8] rounded-full flex items-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-header leading-none px-4 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2">
              IMPACT
            </h1>
          </div>
          
          {/* Banner Project Embed */}
          <div className="bg-[#151429] rounded-2xl p-5 flex items-center justify-center max-w-[614px]">
            <p className="text-white text-sm sm:text-base md:text-lg font-hack leading-relaxed">
              The tools I know how to use don't matter! What matters is that I listen to the clients' needs. I empathize with their frustrations. And I find the right solution. The skills will come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 