import getResponceUrl from './getResponseUrl';

describe('getResponceUrl', () => {
  it('Should be an instance of Function', () => {
    expect(getResponceUrl).toBeInstanceOf(Function);
  });

  it('Should contain key', () => {
    const result = getResponceUrl.key;
    expect(result).toEqual(undefined);
  });
});
