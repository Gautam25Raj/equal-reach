'use client';

import { useRouter, useParams } from 'next/navigation';

import PageHeader from '@/components/layout/PageHeader';

const Page = () => {
  const { postId } = useParams();
  console.log(postId);

  return (
    <div className="col-span-10 lg:col-span-6 border-x border-gray-200">
      <PageHeader title={'Posts'} isRefresh={true} opacity />
    </div>
  );
};
export default Page;
