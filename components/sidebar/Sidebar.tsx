"use client";

import Image from "next/image";
import {
  BellIcon,
  HomeIcon,
  InformationCircleIcon,
  UserCircleIcon,
  UserGroupIcon,
  EllipsisHorizontalCircleIcon as DotsCircleHorizontalIcon,
} from "@heroicons/react/24/outline";

import SidebarRow from "./SidebarRow";
import { SidebarLogoutButton, SidebarSignupButton } from "../ui/ClientButtons";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-row md:flex-col order-last md:order-first items-center  md:mt-5 mx-auto md:items-start xl:px-4">
      <Image
        src="/equal-reach-logo.svg"
        alt="Equal Reach Logo"
        className="p-3 mb-10 hidden md:block"
        width={146}
        height={70}
      />
      <ul className="flex flex-row md:flex-col">
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
        <SidebarRow
          Icon={BellIcon}
          title="Notifications"
          href="/feed/notification"
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
