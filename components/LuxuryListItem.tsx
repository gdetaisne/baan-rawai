import { ExternalLink } from 'lucide-react';

interface LuxuryListItemProps {
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export function LuxuryListItem({ name, description, link, linkLabel }: LuxuryListItemProps) {
  return (
    <div className="border-b border-border last:border-0 py-5 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-ink mb-1" style={{ fontFamily: '"Ade Display", serif', fontSize: '1.05rem', fontWeight: 400 }}>
            {name}
          </h4>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-accent hover:text-ink transition-colors whitespace-nowrap mt-1"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {linkLabel || 'View'} <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}
