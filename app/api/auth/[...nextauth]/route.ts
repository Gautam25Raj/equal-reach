import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '@/libs/prismadb';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },

      async authorize(credentials) {
        if (
          !credentials?.username ||
          !credentials?.email ||
          !credentials?.password
        ) {
          throw new Error(' credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword)
          throw new Error('Invalid Username or Email');

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) throw new Error('Invalid Credentials');

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },

  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
