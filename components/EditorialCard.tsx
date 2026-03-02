import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
}

// Pas de border, pas de background — juste du contenu qui respire
export function EditorialCard({ children, className }: EditorialCardProps) {
  return (
    <div className={cn('py-8 border-t border-[#DDE8EA] first:border-t-0', className)}>
      {children}
    </div>
  );
}
