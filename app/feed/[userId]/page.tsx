'use client';

import Feed from '@/components/forum/Feed';
import { useParams } from 'next/navigation';

const Page = () => {
  const router = useParams();
  const { userId } = router;

  return (
    <main className="col-span-10 lg:col-span-6">
      <Feed userId={userId} />
    </main>
  );
};
export default Page;
