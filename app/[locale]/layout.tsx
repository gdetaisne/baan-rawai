import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { LuxuryHeader } from '@/components/LuxuryHeader';
import { LuxuryLayout } from '@/components/LuxuryLayout';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return {
    title:
      locale === 'fr'
        ? 'Baan Sayiuan | Notre maison à Rawai'
        : 'Baan Sayiuan | Our home in Rawai',
    description:
      locale === 'fr'
        ? 'Votre guide complet pour notre maison à Rawai, Phuket. Tout ce dont vous avez besoin pour un séjour parfait.'
        : 'Your complete guide to our home in Rawai, Phuket. Everything you need for an amazing stay.',
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#0F1416',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
          <LuxuryLayout>
            <LuxuryHeader />
            {children}
          </LuxuryLayout>
          <StickyMobileBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
