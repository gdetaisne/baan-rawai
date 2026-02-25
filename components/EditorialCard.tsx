import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Premium card with hairline border, refined padding, luxury spacing.
 */
export function EditorialCard({ children, className }: EditorialCardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-hairline p-8 md:p-10 rounded-luxury',
        className
      )}
    >
      {children}
    </div>
  );
}
