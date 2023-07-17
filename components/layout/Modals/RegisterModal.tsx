'use client';

import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/store/store';
import { AppDispatch } from '@/store/store';
import { closeSignupModal, openLoginModal } from '@/store/slice/modalSlice';
import Modal from '../Modal';
import Input from '@/components/ui/Input';

const RegisterModal = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isOpen = useAppSelector((state) => state.modalReducer.isSignupOpen);
  const dispatch = useDispatch<AppDispatch>();

  const handleSignup = useCallback(async () => {
    try {
      setIsLoading(true);

      dispatch(closeSignupModal());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const handleToggle = useCallback(() => {
    dispatch(closeSignupModal());
    dispatch(openLoginModal());
  }, [dispatch]);

  const footer = (
    <div className="text-center z-10">
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
      disabled={isLoading}
      footer={footer}
      actionLabel="Sign up"
      onSubmit={handleSignup}
    >
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={false}
        />

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={false}
        />

        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={false}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={false}
        />
      </div>
    </Modal>
  );
};

export default RegisterModal;
