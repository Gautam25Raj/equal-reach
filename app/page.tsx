// import { getServerSession } from 'next-auth';

// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import PageHeader from '@/components/layout/PageHeader';
import HomeHeader from '@/components/layout/header/HomeHeader';

export default async function Home() {
  // const session = await getServerSession({ ...authOptions });

  return (
    <main className="col-span-10 border-l border-gray-200 xl:border-x">
      <div className="h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
        <PageHeader title="Home" isRefresh={false} />
        <HomeHeader />

        {/* <h1>Server Side Rendered</h1>
        <pre>
          <code>{JSON.stringify(session)}</code>
        </pre> */}
      </div>
    </main>
  );
}
