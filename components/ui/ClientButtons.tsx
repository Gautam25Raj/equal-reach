'use client';
import { use, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  XMarkIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import useOpenLoginModal from '@/hooks/useLoginModal';
import useOpenSignupModal from '@/hooks/useSignupModal';
import useOpenEditModal from '@/hooks/useEditModal';

import { AppDispatch } from '@/store/store';
import {
  closeLoginModal,
  closeSignupModal,
  closeEditModal,
} from '@/store/slice/modalSlice';

import SidebarRow from '../sidebar/SidebarRow';
import Button from './Button';
import { signOut, useSession } from 'next-auth/react';

interface ModalCloseBtnProps {
  disabled?: boolean;
}

interface FollowButtonProps {
  label: string;
  onClick: () => void;
}

const ModalCloseBtn = ({ disabled }: ModalCloseBtnProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = useCallback(() => {
    if (disabled) return;

    dispatch(closeEditModal());
    dispatch(closeLoginModal());
    dispatch(closeSignupModal());
  }, [disabled, dispatch]);

  return (
    <button className="p-1 ml-auto hover:opacity-20" onClick={handleClose}>
      <XMarkIcon className="h-6 w-6" />
    </button>
  );
};

const OverlayScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = useCallback(() => {
    dispatch(closeEditModal());
    dispatch(closeLoginModal());
    dispatch(closeSignupModal());
  }, [dispatch]);

  return (
    <div
      className="h-screen w-screen absolute top-0 left-0"
      onClick={handleClose}
    ></div>
  );
};

const SidebarSignupButton = () => {
  const openLoginModal = useOpenLoginModal();

  return (
    <SidebarRow
      href=""
      Icon={UserIcon}
      title="Log In"
      isBtn
      onClick={openLoginModal}
    />
  );
};

const SidebarLogoutButton = () => {
  return (
    <SidebarRow
      href=""
      Icon={ArrowLeftOnRectangleIcon}
      title="Log Out"
      isBtn
      onClick={() => signOut()}
    />
  );
};

const HeaderButton = () => {
  const openSignupModal = useOpenSignupModal();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {!!session ? (
        <Button
          label="Explore Now"
          onClick={() => {
            router.push('/feed');
          }}
          fullWidth={false}
          disabled={false}
        />
      ) : (
        <Button
          label="Sign up Now"
          onClick={openSignupModal}
          fullWidth={false}
          disabled={false}
        />
      )}
    </>
  );
};

const ProfileEditButton = () => {
  const openEditModal = useOpenEditModal();

  return (
    <Button
      label="Edit"
      secondary
      onClick={openEditModal}
      fullWidth={false}
      disabled={false}
    />
  );
};

const FollowButton = ({ label, onClick }: FollowButtonProps) => {
  return (
    <Button
      label={label}
      secondary
      onClick={onClick}
      fullWidth={false}
      disabled={false}
    />
  );
};

export {
  HeaderButton,
  SidebarSignupButton,
  ModalCloseBtn,
  OverlayScreen,
  SidebarLogoutButton,
  ProfileEditButton,
  FollowButton,
};
