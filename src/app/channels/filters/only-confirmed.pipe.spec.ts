import { OnlyConfirmedPipe } from './only-confirmed.pipe';

describe('OnlyConfirmedPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyConfirmedPipe();
    expect(pipe).toBeTruthy();
  });
});
