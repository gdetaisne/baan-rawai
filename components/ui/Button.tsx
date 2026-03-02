import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({ children, variant = 'primary', size = 'default', href, onClick, type = 'button', className }: ButtonProps) {
  const base = 'inline-flex items-center justify-center tracking-[0.15em] uppercase transition-all duration-500';
  const fontStyle = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 };

  const variants = {
    primary:   'bg-accent text-white hover:bg-ink text-[10px]',
    secondary: 'border border-ink/25 text-ink hover:bg-ink hover:text-background text-[10px]',
    ghost:     'text-accent border-b border-accent/40 pb-px hover:border-accent text-[10px]',
  };

  const sizes = {
    sm:      'px-5 py-2',
    default: 'px-8 py-3.5',
    lg:      'px-10 py-4',
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
         rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
         className={cls} style={fontStyle}>
        {children}
      </a>
    );
  }

  return <button type={type} onClick={onClick} className={cls} style={fontStyle}>{children}</button>;
}
