"use server"
import { enqueue } from '@/lib/notificationQueue';
import { INotificationService } from '@/types/notification.types';
import { NextResponse } from 'next/server';

export async function LikeAction(postLikeData : INotificationService){

  const { likeUserId, postId, postOwnerId } = postLikeData;

  if (likeUserId === postOwnerId) {
    return Response.json({ status: 'skipped' });
  }

  enqueue({ likeUserId, postId, postOwnerId });
  return NextResponse.json({ status: 'notified' });
}
