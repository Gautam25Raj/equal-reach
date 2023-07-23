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
        <div className="flex flex-col p-5 md:flex-row justify-center items-center mb-10 text-center xl:px-8">
          <h2 className="text-2xl xl:text-3xl font-medium border-b-2 pb-6 md:pb-0 md:border-b-0 md:border-r-2 xl:pr-12 md:pr-6 ">
            More People <br /> More Impact
          </h2>
          <p className="py-8 lg:text-base max-w-xl md:px-10 xl:pl-16 md:text-md md:text-left">
            "Join the Collective for Social Equality: Together, We Create a
            Stronger Voice, Amplify Impact, and Make a Meaningful Difference."
          </p>

          <button
            className={`py-2 px-7 text-xs  after:content-[" "] after:h-[115%] after:w-[105%]  relative after:absolute after:-z-50 after:top-1/2 after:left-1/2 after:bg-rainbow  after:rounded-md w-fit bg-white rounded-md after:-translate-y-1/2 after:-translate-x-1/2`}
          >
            About Us
          </button>
        </div>

        <ReadyToJoin />
        <Footer />
      </div>
    </main>
  );
}
