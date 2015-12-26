import expect from 'unexpected';
import keyMirror from '../src/ttkeymirror.js';

describe('TTKeyMirror', () => {
  it('should be defined', () => {
    expect(keyMirror, 'to be defined');
  });

  it('should error', () => {
    expect(keyMirror, 'to error');
  });

  it('should return correct values', () => {
    const testArray = [
      'ACTION01',
      'ACTION02',
      'ACTION03'
    ];
    const expectedObject = {
      ACTION01: 'ACTION01',
      ACTION02: 'ACTION02',
      ACTION03: 'ACTION03'
    };

    expect(keyMirror(testArray), 'to be defined');
    expect(keyMirror(testArray), 'to have own properties', expectedObject);
    expect(keyMirror(testArray, true), 'to have keys',
      ['ACTION01', 'ACTION02', 'ACTION03']);
  });
});
