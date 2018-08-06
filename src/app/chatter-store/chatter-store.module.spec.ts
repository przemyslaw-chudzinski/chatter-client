import { ChatterStoreModule } from './chatter-store.module';

describe('ChatterStoreModule', () => {
  let chatterStoreModule: ChatterStoreModule;

  beforeEach(() => {
    chatterStoreModule = new ChatterStoreModule();
  });

  it('should create an instance', () => {
    expect(chatterStoreModule).toBeTruthy();
  });
});
