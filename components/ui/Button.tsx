import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-ink-green text-background hover:bg-ink-green/90 active:bg-ink-green/80 tracking-wide uppercase',
    secondary: 'bg-coral text-background hover:bg-coral/90 active:bg-coral/80 tracking-wide uppercase',
    ghost: 'bg-transparent text-ink-green border border-ink-green/20 hover:border-ink-green hover:bg-ink-green/5 tracking-wide uppercase',
  };

  const sizes = {
    default: 'px-8 py-3 text-sm',
    sm: 'px-6 py-2 text-xs',
    lg: 'px-10 py-4 text-sm',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
