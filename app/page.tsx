import InfoCard from "@/components/InfoCard";
import ReadyToJoin from "@/components/ReadyToJoin";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import HomeHeader from "@/components/layout/header/HomeHeader";
import User from "@/components/user.component";

export default async function Home() {
  return (
    <main className="border-l border-gray-200 xl:border-x ">
      <div className="h-[90vh] md:h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
        {/* <User /> */}
        <PageHeader title="Home" isRefresh={false} />
        <HomeHeader />
        <InfoCard hasBtn={true} />
        <ReadyToJoin />
        <Footer />
      </div>
    </main>
  );
}
