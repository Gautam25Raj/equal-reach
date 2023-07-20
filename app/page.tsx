import InfoCard from '@/components/InfoCard';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import HomeHeader from '@/components/layout/header/HomeHeader';

export default async function Home() {
  return (
    <main className="col-span-10 border-l border-gray-200 xl:border-x">
      <div className="h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
        <PageHeader title="Home" isRefresh={false} />
        <HomeHeader />
        <InfoCard />
        <Footer />
      </div>
    </main>
  );
}
