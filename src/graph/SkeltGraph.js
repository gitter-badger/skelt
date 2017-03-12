import Graph from './core/Graph';
import Node from './core/Node';
import Accessor from './core/Accessor';
import Data from './core/Data';

import SkeltNode from './SkeltNode';

export default class SkeltGraph {
  constructor() {
    this.graph = new Graph();
  }

  // regist node and return SkeltNode
  _register({id, state, children}) {
    const node = new Node({
      data: new Data(),
      state: state,
      children: children,
    });
    const accessor = new Accessor(id);
    this.graph.addNode(accessor, node);
    return new SkeltNode(accessor);
  }

  // make placeholder node
  placeholder(id = "placeholder") {
    return this._register({
      id: id,
      state: null,
      children: [],
    });
  }

  // execute node
  execute(skeltNode) {
    this.graph.execute(skeltNode.accessor);
  }

}
