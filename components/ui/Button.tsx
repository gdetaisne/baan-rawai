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
    primary: 'bg-ink text-cream-50 hover:bg-ink/90',
    secondary: 'bg-taupe-400 text-cream-50 hover:bg-taupe-500',
    ghost: 'bg-transparent text-ink border border-stone-300 hover:border-ink hover:bg-stone-50',
  };

  const sizes = {
    default: 'px-8 py-3 text-sm tracking-wider uppercase',
    sm: 'px-6 py-2 text-xs tracking-widest uppercase',
    lg: 'px-10 py-4 text-base tracking-wider uppercase',
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
