import bcrypt from 'bcrypt';
import toast from 'react-hot-toast';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, username, email, password } = body;

  if (!name || !username || !email || !password) {
    return new NextResponse('Missing fields', { status: 400 });
  }

  let existingUser = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (existingUser) {
    throw new Error('Username already taken');
  }

  existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error('Email already taken');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
