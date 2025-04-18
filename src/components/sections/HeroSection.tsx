'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SocialMediaLinks } from '@/components/ui/SocialMediaLinks';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden flex items-start justify-center pt-8 pb-16 z-10">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30rem] bg-primary/20 blur-[10rem] rounded-full z-10" />
      
      {/* Main content */}
      <Container className="relative z-20">
        <div className="flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4">
          {/* Logo */}
          <div className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[360px]">
            <Image
              src="/assets/icons/LogoLight.svg"
              alt="Khaled Momani Logo"
              width={360}
              height={360}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Services */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
            <div className="inline-block backdrop-blur-sm bg-background/30 rounded-full px-6 py-2">
              <p className="text-white/90 font-hack tracking-[0.2em] text-xs sm:text-sm md:text-base uppercase text-center">
                MARKETING - DESIGN - PHOTOGRAPHY - CONSULTING
              </p>
            </div>

            {/* Social Media Links */}
            <SocialMediaLinks className="scale-75 sm:scale-90 md:scale-100" />
          </div>

          {/* Headline */}
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block backdrop-blur-sm bg-background/30 rounded-full px-8 py-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-hack font-bold">
                Khaled Momani
              </h1>
            </div>
            <div className="inline-block backdrop-blur-sm bg-background/30 rounded-full px-8 py-4">
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-hack leading-relaxed max-w-xl sm:max-w-2xl">
                Designer based in San Antonio TX, driven by curiosity, creating thoughtful, 
                adaptable, and innovative design solutions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 