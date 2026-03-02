import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
}

export function EditorialCard({ children, className }: EditorialCardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border p-8 md:p-10 hover:border-accent/30 transition-colors duration-700 luxury-hover',
        className
      )}
    >
      {children}
    </div>
  );
}
