import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/navbar/Navbar';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Natest Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
