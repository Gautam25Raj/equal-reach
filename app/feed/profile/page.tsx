import PageHeader from '@/components/layout/PageHeader';

const page = () => {
  return (
    <main className="col-span-10 lg:col-span-6 border-x border-gray-200">
      <PageHeader title="Profile" isRefresh={true} opacity />
    </main>
  );
};
export default page;
