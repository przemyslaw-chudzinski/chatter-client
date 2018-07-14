import { AuthPagesModule } from './auth-pages.module';

describe('AuthModule', () => {
  let authModule: AuthPagesModule;

  beforeEach(() => {
    authModule = new AuthPagesModule();
  });

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
