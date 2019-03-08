import { ChannelPagesModule } from './channel-pages.module';

describe('ChannelPagesModule', () => {
  let channelPagesModule: ChannelPagesModule;

  beforeEach(() => {
    channelPagesModule = new ChannelPagesModule();
  });

  it('should create an instance', () => {
    expect(channelPagesModule).toBeTruthy();
  });
});
