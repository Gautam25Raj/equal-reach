'use client';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { XMarkIcon, UserIcon } from '@heroicons/react/24/outline';

import useOpenModal from '@/hooks/useSignupModal';

import { AppDispatch } from '@/store/store';
import { closeLoginModal, closeSignupModal } from '@/store/slice/modalSlice';

import SidebarRow from '../sidebar/SidebarRow';
import Button from './Button';

interface ModalCloseBtnProps {
  disabled?: boolean;
}

const ModalCloseBtn = ({ disabled }: ModalCloseBtnProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = useCallback(() => {
    if (disabled) return;

    dispatch(closeLoginModal());
    dispatch(closeSignupModal());
  }, [disabled, dispatch]);

  return (
    <button className="p-1 ml-auto hover:opacity-20" onClick={handleClose}>
      <XMarkIcon className="h-6 w-6" />
    </button>
  );
};

const SidebarSignupButton = () => {
  const openModal = useOpenModal();

  return (
    <SidebarRow
      href=""
      Icon={UserIcon}
      title="Sign In"
      isBtn
      onClick={openModal}
    />
  );
};

const HeaderButton = () => {
  const openModal = useOpenModal();

  return (
    <Button
      label="Sign up Now"
      onClick={openModal}
      fullWidth={false}
      disabled={false}
    />
  );
};

export { HeaderButton, SidebarSignupButton, ModalCloseBtn };
