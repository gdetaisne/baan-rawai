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
    <div className={cn('bg-white p-4 rounded-xl border border-ocean-100', className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-dark/50 mb-1 font-fun tracking-wider uppercase">{label}</div>
          <div className="font-medium text-dark truncate">{value}</div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-ocean-600 bg-ocean-50 hover:bg-ocean-100 transition-colors rounded-full"
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
