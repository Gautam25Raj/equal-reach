import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  try {
    const { userEmail } = params;

    if (!userEmail || typeof userEmail !== 'string') {
      throw new Error('Invalid ID');
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        profileImage: true,
        coverImage: true,
        createdAt: true,
        bio: true,
        updatedAt: true,
        followingIds: true,
        followersIds: true,
        hasNotifications: true,
      },
    });

    return NextResponse.json(existingUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
