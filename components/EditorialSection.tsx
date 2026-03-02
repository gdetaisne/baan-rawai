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
        'py-24 md:py-36',
        background === 'ivory' ? 'bg-[#F5F5F3]' : 'bg-white',
        className
      )}
    >
      {/* Header — left aligned, big, editorial */}
      <div className="px-8 md:px-14 lg:px-20 mb-16 md:mb-24">
        <p className="text-label text-[#1E7A8C] tracking-[0.25em] mb-8">{label}</p>
        <h2 className="text-display-md text-[#1A1916] max-w-2xl">{title}</h2>
        {description && (
          <p className="text-body-lg text-[#7A766E] mt-6 max-w-xl">{description}</p>
        )}
      </div>
      <div className="px-8 md:px-14 lg:px-20">
        {children}
      </div>
    </section>
  );
}
