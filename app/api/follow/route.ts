import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
  try {
    const { userId, currentUser } = await req.json();

    if (!userId || typeof userId !== 'string') {
      throw new Error('Ivalid user id');
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    let updatedFollowingIds = [...(currentUser.followingIds || [])];
    let updatedFollowersIds = [...(user.followersIds || [])];

    updatedFollowingIds.push(user.id);
    updatedFollowersIds.push(currentUser.id);

    const updateUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });

    const updateFollowedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        followersIds: updatedFollowersIds,
      },
    });

    return NextResponse.json({ updateUser, updateFollowedUser });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function DELETE(req: Request) {
//   try {
//     const { userId } = await req.json();

//     if (!userId || typeof userId !== 'string') {
//       throw new Error('Ivalid user id');
//     }

//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     let updatedFollowingIds = [...(user.followingIds || [])];

//     updatedFollowingIds = updatedFollowingIds.filter((id) => id !== userId);

//     const updateUser = await prisma.user.update({
//       where: {
//         id: userId,
//       },
//       data: {
//         followingIds: updatedFollowingIds,
//       },
//     });

//     return NextResponse.json(updateUser);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export async function DELETE(req: Request) {
  try {
    const { userId, currentUser } = await req.json();

    if (!userId || typeof userId !== 'string') {
      throw new Error('Ivalid user id');
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    let updatedFollowingIds = [...(currentUser.followingIds || [])];
    let updatedFollowersIds = [...(user.followersIds || [])];

    updatedFollowingIds = updatedFollowingIds.filter((id) => id !== user.id);
    updatedFollowersIds = updatedFollowersIds.filter(
      (id) => id !== currentUser.id
    );

    const updateUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });

    const updateFollowedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        followersIds: updatedFollowersIds,
      },
    });

    return NextResponse.json({ updateUser, updateFollowedUser });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
