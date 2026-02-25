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
 * Magazine-style section wrapper with small caps label, H2, optional intro.
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
        'py-20 md:py-28 px-6 md:px-12',
        background === 'highlight' && 'bg-highlight',
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-label text-muted mb-4">{label}</p>
          <h2 className="text-display-md font-display text-ink mb-6">{title}</h2>
          {description && (
            <>
              <div className="h-px w-12 bg-ink/20 mx-auto mb-6" />
              <p className="text-body-lg text-muted max-w-2xl mx-auto">{description}</p>
            </>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
