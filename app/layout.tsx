import { Metadata } from 'next';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | @DN Dashboard',
    default: '@DN Dashboard',
  },
  description: 'Springboard for your digital life.',
  metadataBase: new URL('https://next-learn-dashboard.verce.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
