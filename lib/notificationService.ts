import { notifications } from '@/data/notifications.data';
import { subData } from '@/data/subs.data';
import { INotificationService, ISubscription } from '@/types/notification.types';
import webPush from 'web-push';
import { redis } from './redis';
import { TelemetryPlugin } from 'next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin';

webPush.setVapidDetails(
  "mailto::kautilya101001@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY!
)

export async function sendNotification({ likeUserId, postId, postOwnerId } : INotificationService) {
  try{

    const message = `${likeUserId} liked your post ${postId}`;
    notifications.push({ // db 
      to: postOwnerId,
      message,
      time: new Date().toISOString(),
    });
    
    const subDataStr = await redis.get(`sub:${likeUserId}`) as ISubscription;
    if (!subDataStr) {
      throw new Error(`No subscription found for user ${likeUserId}`);
    }
    
    const subscription = subDataStr;
    const { p256dh, auth } = subscription?.keys;
    const formattedSubscription = {
    endpoint: subscription.endpoint,
    keys: {
      p256dh,
      auth
    }
  };
  console.log('Sending Notification to frontend');
  await webPush.sendNotification(formattedSubscription, JSON.stringify({
    title: 'Test Notification',
    body: message,
    icon: '/icon.png',
  }))
  }
  catch(e){
    console.log(e);
  }
  
}
