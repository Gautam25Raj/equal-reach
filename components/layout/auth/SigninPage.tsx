'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import axios from 'axios';

import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import PageHeader from '../PageHeader';

const SigninPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

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

    await toast.promise(
      signIn('credentials', {
        username,
        email,
        password,
        redirect: false,
      }).then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
          throw new Error(callback.error);
        } else if (callback?.ok) {
          setName('');
          setUsername('');
          setEmail('');
          setPassword('');

          router.push('/feed');
        }
      }),
      {
        loading: 'Logging In...',
        success: <b>Logged in successfully!</b>,
        error: <b>Try again!</b>,
      }
    );
  };

  const Footer = () => (
    <div className="text-center z-10 mt-5">
      <p>
        {'Already have an account? '}
        <button
          className="text-rainbow hover:scale-105 hover:font-semibold transition-transform duration-200"
          onClick={() => router.push('/login')}
        >
          Log In
        </button>
      </p>
    </div>
  );

  return (
    <section className="border-x border-gray-200">
      <PageHeader title="Register" />

      <div className="w-5/6 h-[90vh] md:h-screen md:max-w-md mx-auto mt-20">
        <form className="flex flex-col gap-4 mt-10" onSubmit={handleSignup}>
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

        <Footer />
      </div>
    </section>
  );
};
export default SigninPage;
