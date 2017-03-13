import Graph from './core/Graph';
import Node from './core/Node';
import Accessor from './core/Accessor';
import Data from './core/Data';

import SkeltNode from './SkeltNode';

import Constant from './states/basic/Constant';
import Variable from './states/basic/Variable';

import {StringOperation} from './states/string';

export default class SkeltGraph {
  constructor() {
    this.graph = new Graph();
  }

  // regist node and return SkeltNode
  _register({id, state, children}) {
    const n = children.length;
    let childrenNode = [];
    for (let i = 0; i < n; i++) {
      childrenNode.push(this.graph.getNode(children[i].accessor));
    }

    const node = new Node({
      data: new Data(),
      state: state,
      children: childrenNode,
    });

    const accessor = new Accessor(id);
    this.graph.addNode(accessor, node);
    return new SkeltNode({
      accessor: accessor,
      skeltGraph: this,
    });
  }

  // make placeholder node
  placeholder(id = "placeholder") {
    return this._register({
      id: id,
      state: null,
      children: [],
    });
  }

  // ===========================================
  //  Basic Nodes
  // ===========================================

  constant(value, id = "constant") {
    return this._register({
      id: id,
      state: new Constant(new Data(value)),
      children: [],
    });
  }

  variable(value, id = "variable") {
    return this._register({
      id: id,
      state: new Variable(new Data(value)),
      children: [],
    });
  }


  // ===========================================
  //  String Nodes
  // ===========================================

  replace(str, pattern, replacement, id = "replace") {
    return this._register({
      id: id,
      state: StringOperation.Replace,
      children: [str, pattern, replacement],
    });
  }

  slice(str, from, to = null, id = "slice") {
    if (to == null) {
      return this._register({
        id: id,
        state: StringOperation.Slice,
        children: [str, from],
      });
    }
    return this._register({
      id: id,
      state: StringOperation.Slice,
      children: [str, from, to],
    });
  }

  substr(str, from, length = null, id = "substr") {
    if (length == null) {
      return this._register({
        id: id,
        state: StringOperation.SubStr,
        children: [str, from],
      });
    }
    return this._register({
      id: id,
      state: StringOperation.SubStr,
      children: [str, from, length],
    });
  }

  substring(str, from, to, id = "substring") {
    return this._register({
      id: id,
      state: StringOperation.SubString,
      children: [str, from, to],
    });
  }


  getValue(skeltNode) {
    return this.graph.getNode(skeltNode.accessor).data.value;
  }

  // execute node
  execute(skeltNode) {
    this.graph.execute(skeltNode.accessor);
  }

}
