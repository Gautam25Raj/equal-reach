import { ArrowPathIcon as RefreshIcon } from '@heroicons/react/24/outline';

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
        'bg-white py-2 flex justify-between items-center border-b border-gray-200 sticky top-0 z-40'
      }
    >
      <h1 className="px-5 pb-0 text-xl text-rainbow font-bold">{title}</h1>

      {isRefresh && (
        <RefreshIcon className="mr-5 h-8 w-8 cursor-pointer text-yellow-600 transition-transform duration-500 ease-out hover:rotate-180 active:scale-125" />
      )}
    </div>
  );
};
export default PageHeader;
