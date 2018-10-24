import { environment } from '../../environments/environment';

const apiVersion = 'v1';
const apiUrl = environment.apiUrl + apiVersion;

export const authEndpoints = {
  signInEndpoint: `${apiUrl}/auth/sign-in`
};

export const usersEndpoints = {
  usersEndpoint: `${apiUrl}/users`,
  userEndpoint: (userId: string): string => `${apiUrl}/user/${userId}`,
  updateProfileEndpoint: `${apiUrl}/users/update-profile`,
  loggedUserEndpoint: `${apiUrl}/users/logged-user`,
  userAvatarEndpoint: `${apiUrl}/users/avatar`
};

export const messagesEndpoints = {
  messagesEndpoint: (recipientId: string): string =>
    `${apiUrl}/messages/${recipientId}`,
  updateMessageEndpoint: `${apiUrl}/messages/update-message`,
  saveMessageEndpoint: `${apiUrl}/messages`,
  unreadMessagesEndpoint: `${apiUrl}/messages/unread-messages`,
  resetUnreadMessagesEndpoint: (contactId: string): string => `${apiUrl}/messages/reset-unread/${contactId}`
};

export const validatorEndpoints = {
  checkEmailEndpoint: `${apiUrl}/validator/check-email`
};

export const channelsEndpoints = {
  channelEndpoint: `${apiUrl}/channels`
};

export const notificationsEndpoints = {
  notificationsEndpoint: `${apiUrl}/notifications`,
  countNotificationsEndpoint: `${apiUrl}/notifications/count`
};

export const filesEndpoints = {
  uploadFilesEndpoint: `${apiUrl}/files/upload-files`
};
