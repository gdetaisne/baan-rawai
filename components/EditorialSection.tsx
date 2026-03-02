import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialSectionProps {
  id?: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'ivory';
}

export function EditorialSection({
  id,
  label,
  title,
  description,
  children,
  className,
  background = 'white',
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding border-t border-[#DDE8EA]',
        background === 'ivory' ? 'bg-[#F5F5F3]' : 'bg-white',
        className
      )}
    >
      <div className="max-w-content mx-auto">
        <div className="section-header text-center">
          <p className="text-label text-[#1E7A8C] tracking-[0.25em] mb-8">{label}</p>
          <h2 className="text-display-md text-[#1A1916] mb-6">{title}</h2>
          {description && (
            <p className="text-body-lg text-[#7A766E] max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
