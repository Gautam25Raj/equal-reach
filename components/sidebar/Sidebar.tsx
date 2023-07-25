'use client';

import Image from 'next/image';
import {
  HomeIcon,
  InformationCircleIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import SidebarRow from './SidebarRow';
import { SidebarLogoutButton, SidebarSignupButton } from '../ui/ClientButtons';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-row md:flex-col order-last md:order-first items-center md:mt-5 xl:px-4 h-[10vh] w-full justify-center md:justify-normal md:items-center border-t border-gray-200 md:border-t-0">
      <Image
        src="/equal-reach-logo.svg"
        alt="Equal Reach Logo"
        className="p-3 mb-10 hidden md:block"
        width={146}
        height={70}
      />
      <ul className="flex flex-row md:flex-col md:[&>*]:ml-10 sm:[&>*]:mr-5">
        <SidebarRow Icon={HomeIcon} title="Home" href="/" auth={false} />
        <SidebarRow
          Icon={InformationCircleIcon}
          title="About"
          href="/about"
          auth={true}
        />
        <SidebarRow
          Icon={UserGroupIcon}
          title="Feeds"
          href="/feed"
          auth={true}
        />

        {!!session ? (
          <>
            <SidebarRow
              href="/feed/profile"
              Icon={UserCircleIcon}
              title="Profile"
            />
            <SidebarLogoutButton />
          </>
        ) : (
          <SidebarSignupButton />
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
