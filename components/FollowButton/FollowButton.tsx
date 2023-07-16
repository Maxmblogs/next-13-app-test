import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { options } from '@/app/api/auth/[...nextauth]/options';
import  FollowClient from './FollowClient'

interface Props {
    targetUserId: string;
  }
  
  export default async function FollowButton({ targetUserId }: Props) {
    const session = await getServerSession(options);
  
    const currentUserId = await prisma.user
      .findFirst({ where: { email: session?.user?.email! } })
      .then((user) => user?.id!);
  
    const isFollowing = await prisma.follows.findFirst({
      where: { followerId: currentUserId, followingId: targetUserId },
    });
  
    return (
      <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
    );
  }