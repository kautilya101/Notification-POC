import { notifications } from '@/data/notifications.data';
import { subData } from '@/data/subs.data';
import { INotificationService } from '@/types/notification.types';
import webPush from 'web-push';

webPush.setVapidDetails(
  "mailto::kautilya101001@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY!
)

export async function sendNotification({ likeUserId, postId, postOwnerId } : INotificationService) {
  const message = `${likeUserId} liked your post ${postId}`;
  notifications.push({ // db 
    to: postOwnerId,
    message,
    time: new Date().toISOString(),
  });

  console.log(`${message}`); // core notification
  const subscription = subData[subData.length-1]
  console.log(subscription);
  await webPush.sendNotification(subscription, JSON.stringify({
    title: 'Test Notification',
    body: message,
    icon: '/icon.png',
}))
}


// Public Key:
// BFr8iHGeQa10RissIIYeu2hSojB_VO7Xv9ruEa-cvLwmJVFafHyan7fyMDmuNmTaLk0es6F6wrVDqTh3cgRui9U

// Private Key:
// Qx8qS-m94hs4AwVlAPytuhrESjyzDBQ-g4xrJQhFrBc