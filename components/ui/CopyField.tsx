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
    } catch {}
  };

  if (locked) {
    return (
      <div className={cn('border border-border bg-paper p-4', className)}>
        <div className="flex items-center gap-3">
          <Lock className="w-3.5 h-3.5 text-muted/60" />
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-muted/60 mb-0.5"
               style={{ fontFamily: '"DM Sans", sans-serif' }}>{label}</p>
            <p className="text-sm text-muted/50 italic">Available in private mode</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('border border-border bg-surface p-4 hover:border-accent/40 transition-colors duration-500', className)}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.18em] uppercase text-accent/70 mb-1"
             style={{ fontFamily: '"DM Sans", sans-serif' }}>{label}</p>
          <p className="text-ink font-mono text-sm">{value}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-muted border border-border px-3 py-2 hover:border-accent hover:text-accent transition-all duration-500 flex-shrink-0"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          {copied ? <><Check className="w-3.5 h-3.5" /><span className="hidden sm:inline">Copied</span></>
                  : <><Copy className="w-3.5 h-3.5" /><span className="hidden sm:inline">Copy</span></>}
        </button>
      </div>
    </div>
  );
}
