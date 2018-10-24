export interface INotification {
  _id: string;
  authorId: string;
  message: string;
  recipientIds: string[];
  createdAt: Date;
  read: boolean;
  readAt: Date;
  type?: string;
}
