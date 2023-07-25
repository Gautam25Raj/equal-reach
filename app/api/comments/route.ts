import { NextResponse } from 'next/server';

import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
  try {
    const { body, userId, postId } = await req.json();

    const comment = await prisma.comment.create({
      data: {
        body,
        userId,
        postId,
      },
    });

    return NextResponse.json({ comment });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
