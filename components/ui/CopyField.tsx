'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyFieldProps {
  label: string;
  value: string;
  copyLabel: string;
  copiedLabel: string;
  className?: string;
}

export function CopyField({ label, value, copyLabel, copiedLabel, className }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={cn('border border-stone-200 bg-white p-4', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-stone-400 mb-1 tracking-widest uppercase">{label}</div>
          <div className="text-ink truncate">{value}</div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 text-xs text-ink border border-stone-200 hover:border-ink hover:bg-stone-50 transition-colors tracking-widest uppercase"
          aria-label={`${copyLabel} ${label}`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLabel}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">{copyLabel}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
