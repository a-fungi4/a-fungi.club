import { ReactNode } from 'react';

export interface NavItemType {
  name: string;
  href: string;
  icon: string;
}

export const NAV_ITEMS: NavItemType[] = [
  {
    name: 'WIP',
    href: '/wip',
    icon: '/assets/icons/Nav%20bar%20Icons/24x24-wip.svg',
  },
  {
    name: 'PORTFOLIO',
    href: '/portfolio',
    icon: '/assets/icons/Nav%20bar%20Icons/24x24-portfolio.svg',
  },
  {
    name: 'ABOUT',
    href: '/about',
    icon: '/assets/icons/Nav%20bar%20Icons/24x24-about.svg',
  },
  {
    name: 'ART',
    href: '/art',
    icon: '/assets/icons/Nav%20bar%20Icons/24x24-art.svg',
  },
  {
    name: 'MISC',
    href: '/misc',
    icon: '/assets/icons/Nav%20bar%20Icons/24x24-misc.svg',
  },
]; 