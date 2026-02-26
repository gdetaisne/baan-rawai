import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialSectionProps {
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'highlight';
}

/**
 * Minimal COMO-style section wrapper with refined spacing.
 */
export function EditorialSection({
  label,
  title,
  description,
  children,
  className,
  background = 'default',
}: EditorialSectionProps) {
  return (
    <section
      className={cn(
        'py-32 md:py-40 px-8 md:px-12 lg:px-16',
        background === 'highlight' ? 'bg-white' : 'bg-paper',
        className
      )}
    >
      <div className="max-w-content mx-auto">
        {/* Minimal Section header */}
        <div className="mb-20 md:mb-24 text-center">
          <p className="text-label text-muted">{label}</p>
          <div className="h-px w-12 bg-ink/20 mx-auto mt-4 mb-12" />
          <h2 className="text-display-md text-ink mb-8">{title}</h2>
          {description && (
            <p className="text-body-lg text-muted max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
