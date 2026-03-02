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
        'bg-white border border-[#DDE8EA] p-8 md:p-10 hover:border-[#1E7A8C]/30 transition-colors duration-500',
        className
      )}
    >
      {children}
    </div>
  );
}
