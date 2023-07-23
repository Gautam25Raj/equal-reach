import prisma from '@/libs/prismadb';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(res: Response) {
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
        image: true,
        coverImage: true,
        profileImage: true,
      },
    });

    console.log(headers);

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error();
  }
}
