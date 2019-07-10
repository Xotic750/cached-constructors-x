import * as constructors from 'src/cached-constructors-x';

describe('constructors', function() {
  it('is an object', function() {
    expect.assertions(2);
    expect(typeof constructors).toBe('object');
    expect(constructors).not.toBeNull();
  });

  it('should have all literal constructors', function() {
    expect.assertions(7);
    const literals = ['ArrayCtr', 'BooleanCtr', 'FunctionCtr', 'NumberCtr', 'ObjectCtr', 'RegExpCtr', 'StringCtr'];

    const ctrs = [Array, Boolean, Function, Number, Object, RegExp, String];

    literals.forEach(function(name, index) {
      /* eslint-disable-next-line import/namespace */
      expect(constructors[name]).toBe(ctrs[index]);
    });
  });
});
