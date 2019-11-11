import { PaddingPipe } from './padding.pipe';

describe('PaddingPipe', () => {
  let pipe: PaddingPipe;

  beforeAll(() => {
    pipe = new PaddingPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Given the value 4 and argument 3, returns 0004', () => {
    expect(pipe.transform('4', 3)).toEqual('0004');
  });

  it('Given the empty string and argument 6, returns 000000', () => {
    expect(pipe.transform('', 6)).toEqual('000000');
  });

});
