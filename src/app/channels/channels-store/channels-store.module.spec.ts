import { ChannelsStoreModule } from './channels-store.module';

describe('ChannelsStoreModule', () => {
  let channelsStoreModule: ChannelsStoreModule;

  beforeEach(() => {
    channelsStoreModule = new ChannelsStoreModule();
  });

  it('should create an instance', () => {
    expect(channelsStoreModule).toBeTruthy();
  });
});
