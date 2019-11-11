import { wordTrimmer } from './helpers';

describe('Helper functions', () => {
    it('When i give just spaces i get an empty string', () => {
      expect(wordTrimmer('    ')).toEqual('');
    });
  });
