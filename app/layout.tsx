import Sidebar from '@/components/sidebar/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Equal Reach | Home',
  description:
    'Equal Reach aims to address social inequality and promote equal opportunities for all individuals, regardless of their background, gender, race, or socioeconomic status.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto lg:max-w-7xl max-h-screen overflow-hidden grid gap-2 grid-cols-12">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
