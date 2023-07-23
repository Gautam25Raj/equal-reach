import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    let posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            username: true,
            name: true,
            profileImage: true,
          },
        },
        comments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
