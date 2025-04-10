import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl bg-background-active p-6',
          variant === 'hover' && 'hover:bg-background-active/80 transition-colors cursor-pointer',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card'; 