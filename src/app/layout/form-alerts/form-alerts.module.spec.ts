import { FormAlertsModule } from './form-alerts.module';

describe('FormAlertsModule', () => {
  let formAlertsModule: FormAlertsModule;

  beforeEach(() => {
    formAlertsModule = new FormAlertsModule();
  });

  it('should create an instance', () => {
    expect(formAlertsModule).toBeTruthy();
  });
});
