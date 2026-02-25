'use client';

import { useState } from 'react';
import { Copy, Check, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyFieldProps {
  label: string;
  value: string;
  locked?: boolean;
  className?: string;
}

export function CopyField({ label, value, locked = false, className }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (locked) return;
    
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (locked) {
    return (
      <div className={cn('border border-hairline bg-highlight/30 p-4 rounded-luxury', className)}>
        <div className="flex items-center gap-3">
          <Lock className="w-4 h-4 text-muted flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted mb-1 tracking-widest uppercase">{label}</div>
            <div className="text-sm text-muted italic">
              {value || 'Available in Private mode'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('border border-hairline bg-white p-4 rounded-luxury', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-muted mb-1.5 tracking-widest uppercase">{label}</div>
          <div className="text-ink truncate font-mono text-sm">{value}</div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-2 text-xs text-ink border border-hairline hover:border-accent hover:bg-highlight transition-colors tracking-widest uppercase rounded-luxury flex-shrink-0"
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
