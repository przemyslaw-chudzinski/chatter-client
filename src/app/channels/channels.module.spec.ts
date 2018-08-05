import { ChannelsModule } from './channels.module';

describe('ChanlesModule', () => {
  let chanlesModule: ChannelsModule;

  beforeEach(() => {
    chanlesModule = new ChannelsModule();
  });

  it('should create an instance', () => {
    expect(chanlesModule).toBeTruthy();
  });
});
