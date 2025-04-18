'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { name: 'PORTFOLIO', href: '/portfolio', icon: '/assets/icons/Nav%20bar%20Icons/24x24-portfolio.svg' },
  { name: 'ABOUT', href: '/about', icon: '/assets/icons/Nav%20bar%20Icons/24x24-about.svg' },
  { name: 'ART', href: '/art', icon: '/assets/icons/Nav%20bar%20Icons/24x24-art.svg' },
  { name: 'MISC', href: '/misc', icon: '/assets/icons/Nav%20bar%20Icons/24x24-misc.svg' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false); // Close the mobile menu after clicking
  };

  return (
    <nav className="fixed left-2 top-2 z-50 inline-flex flex-col items-center sm:scale-110 md:scale-125 lg:scale-150">
      {/* Main Container - Always rendered */}
      <div className={cn(
        'relative',
        'bg-[#15102A] rounded-[50px]',
        '[box-shadow:0_0_4px_0_#C0282D]',
        'transition-all duration-700 ease-in-out origin-top',
        isOpen 
          ? 'w-[120px] h-[280px] pt-4'
          : 'w-[70px] h-[88px] py-3'
      )}>
        {/* Logo/Brandmark */}
        <div className={cn(
          "absolute left-1/2 -translate-x-1/2",
          isOpen ? "top-4" : "top-3"
        )}>
          <Link href="/" className="block">
            <Image
              src="/assets/icons/Nav%20bar%20Icons/24x24-brand%20mark.svg"
              alt="Brand Mark"
              width={22}
              height={19.5}
              className="w-[22px] h-auto"
            />
          </Link>
        </div>

        {/* Navigation Items Container */}
        <div className={cn(
          "absolute left-1/2 -translate-x-1/2 w-full",
          "flex flex-col items-start",
          "transition-all duration-700 ease-in-out",
          isOpen 
            ? "opacity-100 top-[60px] px-5"
            : "opacity-0 top-[40px] pointer-events-none px-3"
        )}>
          <div className="flex flex-col w-full gap-3">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "flex items-center gap-2 text-white hover:text-[#FF4655] w-full",
                )}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                  transition: `all 300ms ease-in-out`,
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="w-6 h-auto shrink-0"
                />
                <span className="text-[6pt] font-hack uppercase whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger/Close Button Container */}
        <div className={cn(
          "absolute inset-x-0 flex items-center justify-center transition-all duration-700 ease-in-out",
          isOpen ? "bottom-4" : "top-[45px]"
        )}
        style={{
          transitionDelay: isOpen ? '0ms' : '1000ms'
        }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-8 h-8 hover:bg-white/5 rounded-full"
          >
            <Image
              src={`/assets/icons/Nav bar Icons/24x24-${isOpen ? 'Close' : 'drop down'}.svg`}
              alt={isOpen ? "Close Menu" : "Open Menu"}
              width={24}
              height={24}
              className={cn(
                "w-6 h-6",
                "transition-transform duration-1000 ease-in-out",
                isOpen ? "rotate-180 scale-y-[-1]" : "rotate-0"
              )}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};