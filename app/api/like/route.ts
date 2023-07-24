import { NextResponse } from 'next/server';

import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
  try {
    const { postId, currentUserId } = await req.json();
    console.log('postId', postId);
    console.log('currentUserId', currentUserId);

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    console.log('post', post);

    if (!post) {
      throw new Error('Post not found');
    }

    let updatedLikedIds = [...(post.likedIds || [])];

    updatedLikedIds.push(currentUserId);

    console.log('updatedLikedIds', updatedLikedIds);

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { likedIds: updatedLikedIds },
    });

    return NextResponse.json(updatedPost);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { postId, currentUserId } = await req.json();

    if (!postId || !currentUserId) {
      throw new Error('Inavid Id');
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    let updatedLikedIds = [...(post.likedIds || [])];

    updatedLikedIds = updatedLikedIds.filter((id) => id !== currentUserId);

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { likedIds: updatedLikedIds },
    });

    return NextResponse.json(updatedPost);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
