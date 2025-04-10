'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50',
          'disabled:opacity-50 disabled:pointer-events-none',
          
          // Variants
          variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
          variant === 'secondary' && 'bg-white/10 text-white hover:bg-white/20',
          
          // Sizes
          size === 'sm' && 'h-9 px-4 text-sm',
          size === 'md' && 'h-10 px-6 text-base',
          size === 'lg' && 'h-12 px-8 text-lg',
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
); 