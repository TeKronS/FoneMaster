import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { STORE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: STORE_CONFIG.name,
    template: `%s | ${STORE_CONFIG.name}`
  },
  description: STORE_CONFIG.description,
  keywords: STORE_CONFIG.seo.keywords,
  authors: [{ name: STORE_CONFIG.name }],
  metadataBase: new URL(STORE_CONFIG.url),
  openGraph: {
    title: STORE_CONFIG.name,
    description: STORE_CONFIG.description,
    url: STORE_CONFIG.url,
    siteName: STORE_CONFIG.name,
    images: [
      {
        url: STORE_CONFIG.seo.ogImage,
        width: 1200,
        height: 630,
        alt: STORE_CONFIG.name,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: STORE_CONFIG.name,
    description: STORE_CONFIG.description,
    images: [STORE_CONFIG.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}