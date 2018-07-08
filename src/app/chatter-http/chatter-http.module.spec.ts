import { ChatterHttpModule } from './chatter-http.module';

describe('ChatterHttpModule', () => {
  let chatterHttpModule: ChatterHttpModule;

  beforeEach(() => {
    chatterHttpModule = new ChatterHttpModule();
  });

  it('should create an instance', () => {
    expect(chatterHttpModule).toBeTruthy();
  });
});
