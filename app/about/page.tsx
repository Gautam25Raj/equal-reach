import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import AboutHeader from '@/components/layout/header/AboutHeader';

export default function Home() {
  return (
    <main className="col-span-10 border-l border-gray-200 xl:border-x">
      <div className="h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
        <PageHeader title="About" isRefresh={false} />
        <AboutHeader />
        <Footer />
      </div>
    </main>
  );
}
