'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavItemType } from './types';
import { cn } from '@/lib/utils';

interface NavItemProps extends NavItemType {
  isMobile?: boolean;
}

export const NavItem = ({ name, href, icon, isMobile = false }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-4 py-2',
        'transition-all duration-200',
        'font-hack tracking-[0.2em] text-sm',
        isMobile ? (
          'w-full rounded-lg justify-start'
        ) : (
          'rounded-full justify-center'
        ),
        isActive ? (
          'text-white bg-primary hover:bg-primary/90'
        ) : (
          'text-white/60 hover:text-white hover:bg-primary/20'
        )
      )}
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
      <span>{name}</span>
    </Link>
  );
}; 