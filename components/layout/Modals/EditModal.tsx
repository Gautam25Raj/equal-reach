'use client';

import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';

import { useAppSelector } from '@/store/store';
import { AppDispatch } from '@/store/store';
import { closeEditModal } from '@/store/slice/modalSlice';

import Modal from '../Modal';
import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';
import useUser from '@/hooks/useUser';

const RegisterModal = () => {
  const [name, setName] = useState('Test User');
  const [username, setUsername] = useState('TestUser');
  const [bio, setBio] = useState('12345678');
  const [profileImage, setProfileImage] = useState('12345678');
  const [coverImage, setCoverImage] = useState('12345678');

  const { data: currentUserData } = useSession();

  const data = currentUserData?.user?.email;
  console.log(data);
  const user = useUser(data ? data : '');
  console.log(user);

  const isOpen = useAppSelector((state) => state.modalReducer.isEditOpen);
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let register = axios.post('/api/register', {
      name,
      username,
      bio,
      profileImage,
      coverImage,
    });

    await toast.promise(register, {
      loading: 'Registering...',
      success: <b>Account created successfully!</b>,
      error: <b>Something went wrong.</b>,
    });

    signIn('credentials', {
      username,
      redirect: false,
    });

    dispatch(closeEditModal());

    setName('');
    setUsername('');
  };

  return (
    <Modal title="Create an account" isOpen={isOpen} actionLabel="Sign up">
      <form className="flex flex-col gap-4" method="post" onSubmit={handleEdit}>
        <Input
          type="text"
          placeholder="Name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={false}
        />

        <Input
          type="text"
          placeholder="Username"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={false}
        />

        <div className="flex flex-col gap-2 py-5">
          <FormButton label="Sign Up" fullWidth />
        </div>
      </form>
    </Modal>
  );
};

export default RegisterModal;
