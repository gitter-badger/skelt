export default class Graph {
  constructor() {
    this._nodes = {};
  }

  // accessor : Accessor type
  // node     : Node     type
  addNode(accessor, node) {
    this._nodes[accessor.uuid] = node;
  }

  getNode(accessor) {
    return this._nodes[accessor.uuid];
  }

  execute(accessor, verbose = false) {
    for (let i in this._nodes) {
      this._nodes[i].inactivate();
    }

    this._nodes[accessor.uuid].execute();

    if (verbose == true) {
      console.log(`Executed ${accessor.id}`);
      console.log(`Value : ${this._nodes[accessor.uuid].data.value}`);
    }
  }
}
