'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';
import { MobileNav } from './MobileNav';

const NAV_ITEMS = [
  { name: 'PORTFOLIO', href: '/portfolio', icon: '/assets/icons/Nav%20bar%20Icons/24x24-portfolio.svg' },
  { name: 'ABOUT', href: '/about', icon: '/assets/icons/Nav%20bar%20Icons/24x24-about.svg' },
  { name: 'ART', href: '/art', icon: '/assets/icons/Nav%20bar%20Icons/24x24-art.svg' },
  { name: 'MISC', href: '/misc', icon: '/assets/icons/Nav%20bar%20Icons/24x24-misc.svg' },
];

export const Navbar = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const newScrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollPercentage(newScrollPercentage);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial calculation
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="flex h-24 items-center justify-center px-4">
          {/* Desktop Navigation */}
          <nav className={cn(
            'hidden md:flex items-center relative flex-col',
            'w-fit px-8 py-4 rounded-full',
            'bg-[#15102A]',
            '[box-shadow:0_0_4px_0_#C0282D]',
            'max-w-[90vw]'
          )}>
            <div className="flex items-center">
              <Link href="/" className="mr-2 shrink-0 relative z-10">
                <Image
                  src="/assets/icons/Nav%20bar%20Icons/24x24-brand%20mark.svg"
                  alt="Brand Mark"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <div className="relative px-2">
                {/* Left gradient mask */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#15102A] to-transparent z-10" />
                {/* Right gradient mask */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#15102A] to-transparent z-10" />
                {/* Navigation items */}
                <div 
                  ref={scrollContainerRef}
                  className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto pr-8
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 text-white hover:text-[#FF4655] transition-colors shrink-0"
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="text-lg font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Separate scrollbar container */}
            <div className="w-full px-8 mt-2">
              <div className="h-1.5 rounded-full bg-[#15102A]/50">
                <div 
                  className="h-full rounded-full bg-[#FF4655]/40 hover:bg-[#FF4655]/60 transition-colors" 
                  style={{ width: `${scrollPercentage}%` }}
                />
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full max-w-[90vw]">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}; 