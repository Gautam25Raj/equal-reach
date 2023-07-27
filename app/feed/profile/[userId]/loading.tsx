import PageHeader from '@/components/layout/PageHeader';
import { ClipLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className="col-span-10 lg:col-span-6 h-[90vh] md:h-screen border-x border-gray-200">
      <PageHeader title={'Loading'} opacity />

      <div className="flex justify-center items-center h-full -m-16">
        <ClipLoader color="text-yellow-600" size={80} />
      </div>
    </div>
  );
};
export default loading;
