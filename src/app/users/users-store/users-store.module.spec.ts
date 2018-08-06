import { UsersStoreModule } from './users-store.module';

describe('UsersStoreModule', () => {
  let usersStoreModule: UsersStoreModule;

  beforeEach(() => {
    usersStoreModule = new UsersStoreModule();
  });

  it('should create an instance', () => {
    expect(usersStoreModule).toBeTruthy();
  });
});
