import Graph from './core/Graph';
import Node from './core/Node';
import Accessor from './core/Accessor';
import Data from './core/Data';

import SkeltNode from './SkeltNode';

import Constant from './states/basic/Constant';
import Variable from './states/basic/Variable';
import Add from './states/basic/Add';

import {StringOperation} from './states/string';
import {UnixOperation} from './states/unix';
import {LogicOperation} from './states/logic';

export default class SkeltGraph {
  constructor() {
    this.graph = new Graph();
    this._registerUtilNodes();
  }

  // register node and return SkeltNode
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
  //  Util Nodes
  // ===========================================

  _registerUtilNodes() {
    this.utilNodes = {
      space: this._register({
        id: "space",
        state: new Constant(" "),
        children: [],
      }),
      hyphen: this._register({
        id: "hypen",
        state: new Constant("-"),
        children: [],
      }),
    }
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

  add(a, b, id = "add") {
    const dataType = this.graph.getNode(a.accessor).state.dataType;
    return this._register({
      id: id,
      state: new Add(dataType),
      children: [a, b]
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

  match(str, regex, id = "match") {
    return this._register({
      id: id,
      state: StringOperation.Match,
      children: [str, regex],
    });
  }

  search(str, regex, id = "search") {
    return this._register({
      id: id,
      state: StringOperation.Search,
      children: [str, regex],
    });
  }

  split(str, separator, limit = null, id = "split") {
    if (limit == null) {
      return this._register({
        id: id,
        state: StringOperation.Split,
        children: [str, separator],
      });
    }
    return this._register({
      id: id,
      state: StringOperation.Split,
      children: [str, separator, limit],
    });
  }

  toLowerCase(str, id = "toLowerCase") {
    return this._register({
      id: id,
      state: StringOperation.ToLowerCase,
      children: [str],
    });
  }

  toUpperCase(str, id = "toUpperCase") {
    return this._register({
      id: id,
      state: StringOperation.ToUpperCase,
      children: [str],
    });
  }

  // ===========================================
  //  Unix Nodes
  // ===========================================

  childProcess(str, id = "childProcess") {
    return this._register({
      id: id,
      state: UnixOperation.ChildProcess,
      children: [str],
    });
  }

  // ===========================================
  //  Logic Nodes
  // ===========================================

  // if a == true, then b will be excuted and return b's value.
  // Or return false.
  if(a, b, id = "if") {
    return this._register({
      id: id,
      state: LogicOperation.If,
      children: [a, b],
    });
  }

  and(a, b, id = "and") {
    return this._register({
      id: id,
      state: LogicOperation.And,
      children: [a, b],
    });
  }

  or(a, b, id = "or") {
    return this._register({
      id: id,
      state: LogicOperation.Or,
      children: [a, b],
    });
  }

  not(a, id = "not") {
    return this._register({
      id: id,
      state: LogicOperation.Not,
      children: [a],
    });
  }

  equal(a, b, id = "equal") {
    return this._register({
      id: id,
      state: LogicOperation.Equal,
      children: [a, b],
    });
  }

  notEqual(a, b, id = "notEqual") {
    return this._register({
      id: id,
      state: LogicOperation.NotEqual,
      children: [a, b],
    });
  }

  gt(a, b, id = "gt") {
    return this._register({
      id: id,
      state: LogicOperation.GT,
      children: [a, b],
    });
  }

  gte(a, b, id = "gte") {
    return this._register({
      id: id,
      state: LogicOperation.GTE,
      children: [a, b],
    });
  }

  lt(a, b, id = "lt") {
    return this._register({
      id: id,
      state: LogicOperation.LT,
      children: [a, b],
    });
  }

  lte(a, b, id = "lte") {
    return this._register({
      id: id,
      state: LogicOperation.LTE,
      children: [a, b],
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
