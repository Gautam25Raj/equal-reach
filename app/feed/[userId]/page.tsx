'use client';

import Feed from '@/components/forum/Feed';
import { useParams } from 'next/navigation';

const Page = () => {
  const router = useParams();
  const { userId } = router;

  return (
    <main className="col-span-10 lg:col-span-6 h-[90vh] md:h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto border-x border-gray-200">
      <Feed userId={userId} />
    </main>
  );
};
export default Page;
