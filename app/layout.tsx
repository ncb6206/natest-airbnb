import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Natest Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
