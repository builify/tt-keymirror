import expect from 'unexpected';
import actionMirror from '../src/ttactionmirror.js';

describe('TTActionMirror', () => {
  it('should be defined', () => {
    expect(actionMirror, 'to be defined');
  });

  it('should return correct value', () => {
    expect(actionMirror(), 'to be true');
  });
});
