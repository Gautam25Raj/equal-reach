'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';
import PageHeader from '../PageHeader';

const LoginPage = () => {
  const [username, setUsername] = useState('TestUser');
  const [email, setEmail] = useState('testuser@equalreach.com');
  const [password, setPassword] = useState('equalreach1234');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await toast.promise(
      signIn('credentials', {
        username,
        email,
        password,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error(callback.error);
            throw new Error(callback.error);
          } else if (callback?.ok) {
            setUsername('');
            setEmail('');
            setPassword('');
          }
        })
        .then(() => router.push('/feed')),
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
        {"Don't have an Account? "}
        <button
          className="text-rainbow hover:scale-105 hover:font-semibold transition-transform duration-200"
          onClick={() => router.push('/register')}
        >
          Sign Up
        </button>
      </p>
    </div>
  );

  return (
    <section className="border-x border-gray-200">
      <PageHeader title="Log In" />

      <div className="w-5/6 h-[90vh] md:h-screen md:max-w-md mx-auto mt-20">
        <form className="flex flex-col gap-4 mt-10" onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            disabled={false}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <Input
            type="text"
            placeholder="Email"
            disabled={false}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={false}
          />

          <div className="flex flex-col gap-2 py-5">
            <FormButton type="submit" label="Log In" fullWidth />
          </div>
        </form>

        <Footer />
      </div>
    </section>
  );
};

export default LoginPage;
