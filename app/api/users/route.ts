import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        profileImage: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error();
  }
}
