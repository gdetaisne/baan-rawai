import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Minimal COMO-style card with subtle border.
 */
export function EditorialCard({ children, className }: EditorialCardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-black/5 p-8 md:p-10 hover:border-black/10 transition-all duration-500',
        className
      )}
    >
      {children}
    </div>
  );
}
