import { INotificationService } from '@/types/notification.types';
import { sendNotification } from './notificationService';

const queue: INotificationService[] = [];

export function enqueue(job: INotificationService) {
  queue.push(job);
  processQueue();
}

function processQueue() {
  while (queue.length > 0) {
    const job = queue.shift();
    if(job) sendNotification(job); // simulate async
  }
}