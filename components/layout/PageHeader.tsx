import { ArrowPathIcon as RefreshIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  isRefresh?: boolean;
  opacity?: boolean;
}

const PageHeader = ({ title, isRefresh, opacity }: PageHeaderProps) => {
  return (
    <div
      className={
        (opacity ? "" : "opacity-90 ") +
        "bg-white py-2 px-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-40"
      }
    >
      <h1 className=" pb-2 text-xl text-rainbow font-bold">{title}</h1>
      <Image
        src="/equal-reach-logo-sm.svg"
        alt="Equal Reach Logo"
        className=" md:hidden"
        width={50}
        height={30}
      />
      {isRefresh && (
        <RefreshIcon className="mr-5 h-8 w-8 cursor-pointer text-twitter transition-transform duration-500 ease-out hover:rotate-180 active:scale-125" />
      )}
    </div>
  );
};
export default PageHeader;
