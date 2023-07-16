'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import {
  BellIcon,
  HomeIcon,
  UserIcon,
  InformationCircleIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  UserGroupIcon,
  EllipsisHorizontalCircleIcon as DotsCircleHorizontalIcon,
} from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';

import SidebarRow from './SidebarRow';
import { AppDispatch } from '@/store/store';
import { openSignupModal } from '@/store/slice/modalSlice';

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const openModal = useCallback(() => {
    dispatch(openSignupModal());
  }, [dispatch]);

  return (
    <nav className="flex flex-col col-span-2 items-center mt-2 md:mt-5 mx-auto md:items-start xl:px-4">
      <Image
        src="/equal-reach-logo.svg"
        alt="Equal Reach Logo"
        className="p-3 mb-10 hidden md:block"
        width={146}
        height={70}
      />

      <Image
        src="/equal-reach-logo-sm.svg"
        alt="Equal Reach Logo"
        className="p-3 mb-5 md:hidden"
        width={70}
        height={70}
      />

      <ul>
        <SidebarRow Icon={HomeIcon} title="Home" href="/" />
        <SidebarRow Icon={InformationCircleIcon} title="About" href="/about" />
        <SidebarRow Icon={UserGroupIcon} title="Feeds" href="/feed" />
        <SidebarRow
          Icon={BellIcon}
          title="Notifications"
          href="/feed/notification"
        />

        <SidebarRow
          href=""
          Icon={UserIcon}
          title="Sign In"
          isBtn
          onClick={openModal}
        />
        {/* <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" /> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
