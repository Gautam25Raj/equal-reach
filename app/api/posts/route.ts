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
        comments: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                name: true,
                profileImage: true,
              },
            },
          },
        },
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
) {
  try {
    const { body, image, userId } = await req.json();

    const post = await prisma.post.create({
      data: {
        body,
        userId,
        image,
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