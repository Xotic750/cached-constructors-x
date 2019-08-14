import {
  ArrayCtr,
  BooleanCtr,
  FunctionCtr,
  NumberCtr,
  ObjectCtr,
  RegExpCtr,
  StringCtr,
  ArrayPrototype,
  BooleanPrototype,
  FunctionPrototype,
  NumberPrototype,
  ObjectPrototype,
  RegExpPrototype,
  StringPrototype,
} from 'src/cached-constructors-x';

describe('constructors', function() {
  it('should have all literal constructors', function() {
    expect.assertions(7);
    const literals = [ArrayCtr, BooleanCtr, FunctionCtr, NumberCtr, ObjectCtr, RegExpCtr, StringCtr];

    const ctrs = [Array, Boolean, Function, Number, Object, RegExp, String];

    literals.forEach(function(Ctr, index) {
      expect(Ctr).toBe(ctrs[index]);
    });
  });

  it('should have all literal prototypes', function() {
    expect.assertions(7);
    const literals = [
      ArrayPrototype,
      BooleanPrototype,
      FunctionPrototype,
      NumberPrototype,
      ObjectPrototype,
      RegExpPrototype,
      StringPrototype,
    ];

    const protos = [
      Array.prototype,
      Boolean.prototype,
      Function.prototype,
      Number.prototype,
      Object.prototype,
      RegExp.prototype,
      String.prototype,
    ];

    literals.forEach(function(proto, index) {
      expect(proto).toBe(protos[index]);
    });
  });
});
