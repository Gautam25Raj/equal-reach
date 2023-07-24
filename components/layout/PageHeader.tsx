import { ArrowPathIcon as RefreshIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  isRefresh?: boolean;
  opacity?: boolean;
}

const PageHeader = ({ title, isRefresh, opacity }: PageHeaderProps) => {
  return (
    <div
      className={
        (opacity ? '' : 'opacity-90 ') +
        'bg-white py-2 px-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-40'
      }
    >
      <div className="flex items-center">
        <Image
          src="/equal-reach-logo-sm.svg"
          alt="Equal Reach Logo"
          className="mr-3 md:hidden"
          width={40}
          height={40}
        />

        <h1 className="text-xl text-rainbow font-bold">{title}</h1>
      </div>
      {isRefresh && (
        <RefreshIcon className="mr-0 md:mr-5 h-8 w-8 cursor-pointer text-yellow-600 transition-transform duration-500 ease-out hover:rotate-180 active:scale-125" />
      )}
    </div>
  );
};
export default PageHeader;
