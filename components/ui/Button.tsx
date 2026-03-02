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
  const base = 'inline-flex items-center justify-center tracking-[0.15em] uppercase transition-all duration-400';
  const fontStyle = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 };

  const variants = {
    primary:   'bg-[#1E7A8C] text-white hover:bg-[#165E6E] text-[10px]',
    secondary: 'border border-[#1A1916]/25 text-[#1A1916] hover:bg-[#1A1916] hover:text-white text-[10px]',
    ghost:     'text-[#1E7A8C] border-b border-[#1E7A8C]/40 pb-px hover:border-[#1E7A8C] text-[10px]',
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
