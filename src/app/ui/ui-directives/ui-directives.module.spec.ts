import { UiDirectivesModule } from './ui-directives.module';

describe('UiDirectivesModule', () => {
  let uiDirectivesModule: UiDirectivesModule;

  beforeEach(() => {
    uiDirectivesModule = new UiDirectivesModule();
  });

  it('should create an instance', () => {
    expect(uiDirectivesModule).toBeTruthy();
  });
});
