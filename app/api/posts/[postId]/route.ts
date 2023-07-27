import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
            profileImage: true,
          },
        },
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                username: true,
                profileImage: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    NextResponse.json({ error: 'Something went wrong!' }, { status: 500 });
  }
}
