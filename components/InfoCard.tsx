import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export function InfoCard({ children, className, variant = 'default' }: InfoCardProps) {
  return (
    <div
      className={cn(
        'border p-8',
        variant === 'default' && 'border-[#E8E1D8] bg-white',
        variant === 'accent' && 'border-[#D6C2B0] bg-[#D6C2B0]/10',
        className
      )}
    >
      {children}
    </div>
  );
}
