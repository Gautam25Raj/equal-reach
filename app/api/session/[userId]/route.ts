import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    console.log(userId);

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID');
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return NextResponse.json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
}
