import { notifications } from '@/data/notifications.data';
import { INotificationService } from '@/types/notification.types';


export function sendNotification({ likeUserId, postId, postOwnerId } : INotificationService) {
  const message = `${likeUserId} liked your post ${postId}`;
  notifications.push({ // db 
    to: postOwnerId,
    message,
    time: new Date().toISOString(),
  });

  console.log(`${message}`); // core notification
}