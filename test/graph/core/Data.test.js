import Data, {DataTypes} from "../../../src/graph/core/Data.js";
import assert from 'assert';

export const DataTest = describe('Data test', function() {
  it('getter', function() {
    const expected = "setting data in constructor";
    const actual = new Data(expected);
    assert.equal(actual.value, expected);
  });

  it('DataType validation', function() {
    assert.throws(function() {
      new Data(999, DataTypes.string);
      new Data("aiueo", DataTypes.number);
      new Data(999, DataTypes.boolean);
      new Data(999, DataTypes.regex);
    });
    assert.doesNotThrow(function() {
      new Data(999, DataTypes.number);
      new Data("aiueo", DataTypes.string);
      new Data(true, DataTypes.boolean);
      new Data(/aiueo/, DataTypes.regex);
    });
  });
});
