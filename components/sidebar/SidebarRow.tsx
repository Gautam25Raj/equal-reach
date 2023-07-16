import React, {
  ForwardRefExoticComponent,
  SVGProps,
  RefAttributes,
} from 'react';
import Link from 'next/link';

interface SidebarRowProps {
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
  href: string;
  isBtn?: boolean;
  onClick?: () => void;
}

const SidebarRow = ({ Icon, title, href, isBtn, onClick }: SidebarRowProps) => {
  const children = (
    <div className="flex max-w-fit cursor-pointer items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-pink-50 group">
      <Icon className="h-6 w-6" />

      <p className="hidden group-hover:font-medium group-hover:text-rainbow text-base md:block lg:text-xl">
        {title}
      </p>
    </div>
  );

  return (
    <li>
      {isBtn ? (
        <button onClick={onClick}>{children}</button>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </li>
  );
};
export default SidebarRow;
