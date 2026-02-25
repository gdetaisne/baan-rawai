import type { ReactNode } from 'react';

// Root layout for next-intl
// The actual html/body tags are in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
