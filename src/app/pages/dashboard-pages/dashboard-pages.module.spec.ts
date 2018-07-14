import { DashboardPagesModule } from './dashboard-pages.module';

describe('DashboardModule', () => {
  let dashboardModule: DashboardPagesModule;

  beforeEach(() => {
    dashboardModule = new DashboardPagesModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
