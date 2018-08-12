import { environment } from '../../environments/environment';

const apiVersion = 'v1';
const apiUrl = environment.apiUrl + apiVersion;

export const authEndpoints = {
  signInEndpoint: `${apiUrl}/auth/sign-in`,
  checkEmailEndpoint: `${apiUrl}/auth/check-email`
};

export const usersEndpoints = {
  usersEndpoint: `${apiUrl}/users`,
  userEndpoint: (userId: string): string => `${apiUrl}/user/${userId}`,
  updateProfileEndpoint: `${apiUrl}/users/update-profile`,
  loggedUserEndpoint: `${apiUrl}/users/logged-user`
};

export const messagesEndpoints = {
  messagesEndpoint: (recipientId: string): string =>
    `${apiUrl}/messages/${recipientId}`,
  updateMessageEndpoint: `${apiUrl}/messages/update-message`
};
