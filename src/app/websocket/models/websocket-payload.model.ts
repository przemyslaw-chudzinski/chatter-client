export interface IWebSocketPayload {
  action: string;
  userId: string;
  available?: boolean;
  visibleContactsIds?: string[];
}
