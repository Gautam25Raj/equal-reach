'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { TrashIcon } from '@heroicons/react/24/outline';

import { useAppSelector } from '@/store/store';
import { AppDispatch } from '@/store/store';
import { closeEditModal } from '@/store/slice/modalSlice';

import Modal from '../Modal';
import ImageUpload from '@/components/ui/ImageUpload';
import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';
import useUser from '@/hooks/useUser';

const RegisterModal = () => {
  const router = useParams();
  const { userId } = router;

  const { data: user, mutate: mutateUser } = useUser(userId);

  const isOpen = useAppSelector((state) => state.modalReducer.isEditOpen);
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [coverImage, setCoverImage] = useState('');

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setUsername(user?.username);
    setBio(user?.bio ? user?.bio : '');
    setProfileImage(user?.profileImage ? user?.profileImage : '');
    setCoverImage(user?.coverImage ? user?.coverImage : '');
  }, [user]);

  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      let updateUser = axios.put(`/api/users/edit/${userId}`, {
        name,
        username,
        email,
        bio: bio ? bio : null,
        profileImage: profileImage ? profileImage : null,
        coverImage: coverImage ? coverImage : null,
      });

      await toast.promise(updateUser, {
        loading: 'Updating...',
        success: <b>Account updated successfully!</b>,
        error: <b>Something went wrong.</b>,
      });

      mutateUser();

      dispatch(closeEditModal());
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal title="Edit your Account" isOpen={isOpen} actionLabel="Sign up">
      <form className="flex flex-col gap-4" method="post" onSubmit={handleEdit}>
        <div className="relative">
          <ImageUpload
            value={coverImage}
            onChange={(image) => setCoverImage(image)}
            disabled={isLoading}
            label="Upload Cover Image"
            alt="Cover Image"
          />

          <TrashIcon
            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 text-red-400 cursor-pointer z-20"
            onClick={() => setProfileImage('')}
          />
        </div>

        <div className="relative">
          <ImageUpload
            value={profileImage}
            onChange={(image) => setProfileImage(image)}
            disabled={isLoading}
            label="Upload Profile Image"
            alt="Profile Image"
          />

          <TrashIcon
            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 text-red-400 cursor-pointer z-20"
            onClick={() => setCoverImage('')}
          />
        </div>

        <Input
          type="text"
          placeholder="Name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />

        <Input
          type="text"
          placeholder="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />

        <Input
          type="text"
          placeholder="Username"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />

        <Input
          type="text"
          placeholder="Bio"
          required={false}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          disabled={isLoading}
        />

        <div className="flex flex-col gap-2 py-5">
          <FormButton label="Save" />
        </div>
      </form>
    </Modal>
  );
};

export default RegisterModal;
