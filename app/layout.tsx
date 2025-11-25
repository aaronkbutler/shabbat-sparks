import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shabbat Sparks - Light Candles. Tap Once. Feed a Family.',
  description: 'Transform your Shabbat candle lighting into a weekly act of tzedakah for neighbors in need through Yad Chessed.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Shabbat Sparks',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FFD700',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="bg-gradient-to-b from-shabbat-warmWhite to-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
