import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import prisma from '@/libs/prismadb';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : '',
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : '',
    }),

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
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) throw new Error('User not found');

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
