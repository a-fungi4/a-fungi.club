import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', ...props }, ref) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('container mx-auto px-4 md:px-6', className),
        ...props,
      }
    );
  }
);

Container.displayName = 'Container'; 