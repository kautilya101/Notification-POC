
import { enqueue } from '@/lib/notificationQueue';
import { RedirectStatusCode } from 'next/dist/client/components/redirect-status-code';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest){
   return NextResponse.json({ success: true, ping: "pong"})
}

export async function POST(req: NextRequest){

  const { likeUserId, postId, postOwnerId } = await req.json();

  if (likeUserId === postOwnerId) {
    return NextResponse.json({ status: 'skipped'});
  }

  enqueue({ likeUserId, postId, postOwnerId });
  return NextResponse.json({ status: 'notified' });
}

