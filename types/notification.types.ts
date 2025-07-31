export interface INotificationService {
  likeUserId: string
  postId: string
  postOwnerId: string
}

export interface INotifications {
  to: string
  message: string
  time: string
}

export interface ISubscription {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}