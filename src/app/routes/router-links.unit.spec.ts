import {routerLinks} from './router-links';

describe('router-links', () => {

  it('should contain indexPage route', () => {
    expect(routerLinks.indexPage).toBe('');
  });

  it('should contain dashboardPage route', () => {
    expect(routerLinks.dashboardPage).toBe('dashboard');
  });

  it('should contain loginPage route', () => {
    expect(routerLinks.loginPage).toBe('login');
  });

  it('should contain messagesPage route', () => {
    expect(routerLinks.messagesPage).toBe('messages');
  });

  it('should contain userAccount route', () => {
    expect(routerLinks.accountPages.userAccount).toBe('account');
  });

});
