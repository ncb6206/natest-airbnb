import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
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
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
