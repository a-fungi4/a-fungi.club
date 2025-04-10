'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/afungiclub',
    icon: '/assets/icons/Social Media Icons/icon-unactivated ig.svg',
    hoverIcon: '/assets/icons/Social Media Icons/icon-hover ig.svg',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/track/0TeJ3B7kOOPUJOtmCyNo3G?si=06d9ce98143148ee',
    icon: '/assets/icons/Social Media Icons/icon-unactivated spotify.svg',
    hoverIcon: '/assets/icons/Social Media Icons/icon-hover spotify.svg',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@a-fungiclub',
    icon: '/assets/icons/Social Media Icons/icon-unactivated youtube.svg',
    hoverIcon: '/assets/icons/Social Media Icons/icon-hover youtube.svg',
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/a-fungi',
    icon: '/assets/icons/Social Media Icons/icon-unactivated behance.svg',
    hoverIcon: '/assets/icons/Social Media Icons/icon-hover behance.svg',
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@afungiclub',
    icon: '/assets/icons/Social Media Icons/icon-unactivated threads.svg',
    hoverIcon: '/assets/icons/Social Media Icons/icon-hover threads.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khaled-momani-108305211/',
    icon: '/assets/icons/Social Media Icons/icon-unactivated linkedin.svg',
    hoverIcon: '/assets/icons/Social Media Icons/icon-hover linkedin.svg',
  },
];

export const SocialMediaLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-6 h-6 transition-transform hover:scale-150"
        >
          <Image
            src={link.icon}
            alt={`${link.name} icon`}
            width={24}
            height={24}
            className={cn(
              'w-full h-full object-contain absolute inset-0',
              'opacity-100 group-hover:opacity-0 transition-opacity'
            )}
          />
          <Image
            src={link.hoverIcon}
            alt={`${link.name} hover icon`}
            width={24}
            height={24}
            className={cn(
              'w-full h-full object-contain absolute inset-0',
              'opacity-0 group-hover:opacity-100 transition-opacity'
            )}
          />
        </a>
      ))}
    </div>
  );
}; 