import { ExternalLink } from 'lucide-react';

interface CuratedListItemProps {
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export function CuratedListItem({ name, description, link, linkLabel }: CuratedListItemProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-6 border-b border-[#E8E1D8] last:border-0">
      <div className="flex-1">
        <h4 className="font-display text-lg text-[#1F2A28] mb-1">{name}</h4>
        <p className="text-sm text-[#7A8A8F] leading-relaxed">{description}</p>
      </div>
      {link && linkLabel && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs tracking-wider uppercase text-[#7A8A8F] hover:text-[#1F2A28] transition-colors whitespace-nowrap"
        >
          <span>{linkLabel}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}
