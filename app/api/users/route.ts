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
    return NextResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    );
  }
}

export async function POST() {
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
    return NextResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
