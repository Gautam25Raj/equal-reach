'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

import { useAppSelector } from '@/store/store';
import { AppDispatch } from '@/store/store';
import { closeSignupModal, openLoginModal } from '@/store/slice/modalSlice';

import Modal from '../Modal';
import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';

const RegisterModal = () => {
  const [name, setName] = useState('Test User');
  const [username, setUsername] = useState('TestUser');
  const [email, setEmail] = useState('testuser@equalreach.com');
  const [password, setPassword] = useState('equalreach1234');

  const isOpen = useAppSelector((state) => state.modalReducer.isSignupOpen);
  const dispatch = useDispatch<AppDispatch>();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let register = axios.post('/api/register', {
      name,
      username,
      email,
      password,
    });

    await toast.promise(register, {
      loading: 'Registering...',
      success: <b>Account created successfully!</b>,
      error: <b>Something went wrong.</b>,
    });

    signIn('credentials', {
      username,
      email,
      password,
      redirect: false,
    });

    dispatch(closeSignupModal());

    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleToggle = useCallback(() => {
    dispatch(closeSignupModal());
    dispatch(openLoginModal());
  }, [dispatch]);

  const footer = (
    <div className="text-center z-10 mt-5">
      <p>
        Already have an account?{' '}
        <button
          className="text-rainbow hover:scale-105 hover:font-semibold transition-transform duration-200"
          onClick={handleToggle}
        >
          Log In
        </button>
      </p>
    </div>
  );

  return (
    <Modal
      title="Create an account"
      isOpen={isOpen}
      footer={footer}
      actionLabel="Sign up"
    >
      <form
        className="flex flex-col gap-4"
        method="post"
        onSubmit={handleSignup}
      >
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

        <Input
          type="text"
          placeholder="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={false}
        />

        <Input
          type="password"
          placeholder="Password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
