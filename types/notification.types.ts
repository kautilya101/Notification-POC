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