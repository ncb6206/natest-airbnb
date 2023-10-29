import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/app/components/layout/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';

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
          <RentModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
