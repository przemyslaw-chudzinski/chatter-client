import { MessagesStoreModule } from './messages-store.module';

describe('MessagesStoreModule', () => {
  let messagesStoreModule: MessagesStoreModule;

  beforeEach(() => {
    messagesStoreModule = new MessagesStoreModule();
  });

  it('should create an instance', () => {
    expect(messagesStoreModule).toBeTruthy();
  });
});
