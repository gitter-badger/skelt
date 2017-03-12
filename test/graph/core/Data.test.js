import Data from "../../../src/graph/core/Data.js";
import assert from 'assert';

describe('Data test', function() {
  it('getter', function() {
    const expected = "setting data in constructor";
    const actual = new Data(expected);
    assert.equal(actual.value, expected);
  });
});
