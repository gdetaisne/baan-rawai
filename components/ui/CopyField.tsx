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
    <div className={cn('flex items-center justify-between gap-4 py-3', className)}>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-dusty-blue mb-1">{label}</div>
        <div className="font-medium text-ink-green truncate">{value}</div>
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink-green border border-ink-green/20 hover:border-ink-green/40 hover:bg-ink-green/5 transition-colors rounded-sm"
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
  );
}
