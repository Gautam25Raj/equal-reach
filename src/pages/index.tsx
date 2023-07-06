import { Inter } from 'next/font/google';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Equal Reach | Home</title>
      </Head>

      <main></main>
    </div>
  );
}
