import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;

    let posts = await prisma.post.findMany({
      where: {
        userId,
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

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const { body } = await req.json();

    const post = await prisma.post.create({
      data: {
        body,
        userId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
