export default class Graph {
  constructor() {
    this.nodes = {};
  }

  // accessor : Accessor type
  // node     : Node     type
  addNode(accessor, node) {
    this.nodes[accessor] = node;
  }

  execute(accessor) {
    console.log(`Execute ${accessor.id}`);
    this.nodes[accessor].execute();
  }
}
