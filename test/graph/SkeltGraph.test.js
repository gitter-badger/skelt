import assert from 'assert';

import SkeltGraph from '../../src/graph/SkeltGraph';

export const SkeltGraphTest = describe('SkeltGraph test', function() {
  it('replace', function() {
    const sgraph = new SkeltGraph();

    let a = sgraph.constant("abcde");
    let b = sgraph.constant("a");
    let c = sgraph.constant("p");
    let d = sgraph.replace(a, b, c);

    sgraph.execute(d);
    assert.equal(d.getValue(), "pbcde");
  });

  it('slice', function() {
    const sgraph = new SkeltGraph();

    let a = sgraph.constant("abcde");
    let b = sgraph.constant(1);
    let c = sgraph.constant(3);
    let d = sgraph.slice(a, b, c);
    let e = sgraph.slice(a, b);
    sgraph.execute(d);
    sgraph.execute(e);
    assert.equal(d.getValue(), "abcde".slice(1, 3));
    assert.equal(e.getValue(), "abcde".slice(1));
  });

  it('substr', function() {
    const sgraph = new SkeltGraph();

    let a = sgraph.constant("abcde");
    let b = sgraph.constant(1);
    let c = sgraph.constant(3);
    let d = sgraph.substr(a, b, c);
    let e = sgraph.substr(a, b);
    sgraph.execute(d);
    sgraph.execute(e);
    assert.equal(d.getValue(), "abcde".substr(1, 3));
    assert.equal(e.getValue(), "abcde".substr(1));
  });

  it('substring', function() {
    const sgraph = new SkeltGraph();

    let a = sgraph.constant("abcde");
    let b = sgraph.constant(1);
    let c = sgraph.constant(3);
    let d = sgraph.substring(a, b, c);
    sgraph.execute(d);
    assert.equal(d.getValue(), "abcde".substring(1, 3));
  });


});
