import { NotificationsStoreModule } from './notifications-store.module';

describe('NotificationsStoreModule', () => {
  let notificationsStoreModule: NotificationsStoreModule;

  beforeEach(() => {
    notificationsStoreModule = new NotificationsStoreModule();
  });

  it('should create an instance', () => {
    expect(notificationsStoreModule).toBeTruthy();
  });
});
