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
    primary: 'bg-gradient-ocean text-white hover:shadow-medium active:scale-95 font-fun font-medium',
    secondary: 'bg-gradient-sunset text-white hover:shadow-medium active:scale-95 font-fun font-medium',
    ghost: 'bg-transparent text-ocean-600 border-2 border-ocean-600 hover:bg-ocean-50 active:scale-95 font-fun font-medium',
  };

  const sizes = {
    default: 'px-8 py-3 text-base rounded-full',
    sm: 'px-6 py-2.5 text-sm rounded-full',
    lg: 'px-10 py-4 text-lg rounded-full',
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
