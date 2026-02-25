import { ExternalLink } from 'lucide-react';

interface LuxuryListItemProps {
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

/**
 * Raffles-style curated list item with elegant hierarchy.
 */
export function LuxuryListItem({ name, description, link, linkLabel }: LuxuryListItemProps) {
  return (
    <div className="border-b border-hairline last:border-0 py-6 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-display text-lg text-ink mb-1.5">{name}</h4>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors whitespace-nowrap mt-1"
          >
            <span>{linkLabel || 'View'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
