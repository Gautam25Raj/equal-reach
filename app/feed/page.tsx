import Feed from '@/components/forum/Feed';
import Widgets from '@/components/widgets/Widgets';

const page = () => {
  return (
    <main className="col-span-10 grid gap-2 grid-cols-10">
      <Feed />
      <Widgets />
    </main>
  );
};
export default page;
