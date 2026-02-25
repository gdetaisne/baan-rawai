import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6',
        size === 'default' && 'max-w-3xl',
        size === 'narrow' && 'max-w-2xl',
        size === 'wide' && 'max-w-5xl',
        className
      )}
    >
      {children}
    </div>
  );
}
