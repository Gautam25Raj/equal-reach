import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="col-span-10 border-l border-gray-200 xl:border-x">
      <div className="h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
        <PageHeader title="Home" isRefresh={false} />
      </div>
    </main>
  );
}
