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
        'section-padding border-t border-border',
        background === 'ivory' ? 'bg-paper' : 'bg-background',
        className
      )}
    >
      <div className="max-w-content mx-auto">
        <div className="section-header fade-reveal">
          <p className="text-label text-accent mb-8">{label}</p>
          <h2 className="text-display-md text-ink mb-6 max-w-3xl">{title}</h2>
          {description && (
            <p className="text-body-lg text-muted max-w-2xl">{description}</p>
          )}
        </div>
        <div className="fade-reveal">
          {children}
        </div>
      </div>
    </section>
  );
}
