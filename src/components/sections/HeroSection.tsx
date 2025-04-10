'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SocialMediaLinks } from '@/components/ui/SocialMediaLinks';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden flex items-start justify-center pt-8 pb-16">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30rem] bg-primary/20 blur-[10rem] rounded-full" />
      
      {/* Main content */}
      <Container className="relative text-center">
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
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
            <p className="text-white/60 font-hack tracking-[0.2em] text-xs sm:text-sm md:text-base uppercase px-4">
              MARKETING - DESIGN - PHOTOGRAPHY - CONSULTING
            </p>

            {/* Social Media Links */}
            <SocialMediaLinks className="scale-75 sm:scale-90 md:scale-100" />
          </div>

          {/* Headline */}
          <div className="max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-hack font-bold mb-4 sm:mb-5 md:mb-6">
              Khaled Momani
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 font-hack leading-relaxed max-w-xl sm:max-w-2xl mx-auto px-4">
              Designer based in San Antonio TX, driven by curiosity, creating thoughtful, 
              adaptable, and innovative design solutions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}; 