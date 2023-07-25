'use client';

import PageHeader from '@/components/layout/PageHeader';

const Page = () => {
  return (
    <div className="col-span-10 lg:col-span-6 h-[90vh] md:h-screen border-x border-gray-200">
      <PageHeader title={'Posts'} isRefresh={true} opacity />
      <h1 className="w-full h-full flex justify-center items-center text-3xl text-gray-600 -mt-16">
        SELECT A POST
      </h1>
    </div>
  );
};
export default Page;
