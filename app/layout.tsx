import type { Metadata, Viewport } from 'next';
// Self-hosted Google Fonts (Fontsource). The font files ship with the repo, so
// the build never calls out to fonts.googleapis.com and visitors' browsers
// never make a third-party request.
import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { site } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  // Resolves relative OpenGraph/Twitter image paths to absolute URLs.
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'cancer genomics',
    'epigenomics',
    'gene regulation',
    'computational biology',
    'RI-MUHC',
    'McGill University',
    'Bailey Lab',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.defaultTitle,
    description: site.description,
    url: site.url,
    locale: 'en_CA',
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.defaultTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.defaultTitle,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
