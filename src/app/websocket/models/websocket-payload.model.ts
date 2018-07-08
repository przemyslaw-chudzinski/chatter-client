export interface IWebSocketPayload {
  action: string;
  userId: string;
  visibleContactsIds?: string[];
}
