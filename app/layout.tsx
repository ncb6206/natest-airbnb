import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/layout/Navbar';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import SearchModal from './components/modals/SearchModal';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Natest Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
