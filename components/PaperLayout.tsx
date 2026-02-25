import { ReactNode } from 'react';

interface PaperLayoutProps {
  children: ReactNode;
}

export function PaperLayout({ children }: PaperLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Editorial frame - centered paper */}
      <div className="max-w-[1040px] mx-auto bg-white border-x border-[#E8E1D8]">
        {children}
      </div>
    </div>
  );
}
