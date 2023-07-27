import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const body = await req.json();
    const { name, username, email, bio, profileImage, coverImage } = body;

    if (!name || !username || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 500 });
    }

    let updatedUser = await prisma.user.update({
      where: {
        id: params.userId,
      },
      data: {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        bio: true,
        profileImage: true,
        coverImage: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
