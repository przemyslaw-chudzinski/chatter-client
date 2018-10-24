import { UserAvatarModule } from './user-avatar.module';

describe('UserAvatarModule', () => {
  let userAvatarModule: UserAvatarModule;

  beforeEach(() => {
    userAvatarModule = new UserAvatarModule();
  });

  it('should create an instance', () => {
    expect(userAvatarModule).toBeTruthy();
  });
});
