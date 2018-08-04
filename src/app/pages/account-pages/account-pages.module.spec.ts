import { AccountPagesModule } from './account-pages.module';

describe('AccountPagesModule', () => {
  let accountPagesModule: AccountPagesModule;

  beforeEach(() => {
    accountPagesModule = new AccountPagesModule();
  });

  it('should create an instance', () => {
    expect(accountPagesModule).toBeTruthy();
  });
});
